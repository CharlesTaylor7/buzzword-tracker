import parser from 'fast-xml-parser';
import { fromFetch } from 'rxjs/fetch';
import * as Rx from 'rxjs/operators';
import * as Observable from 'rxjs';
import * as R from 'ramda';

const xml = parser;

const escapeCharacter = char => {
  switch (char) {
    case '/': return '%2F';
    case '?': return '%3F';
    case '#': return '%23';
    case '=': return '%3D';
    case ':': return '%3A';
    case ';': return '%3B';
    case ' ': return '%20';
    case '%': return '%25';
    case '+': return '%2B';
    default: return char;
  }
};
const escape = token => token.split().map(escapeCharacter).join();

const recordSet$ = (token) => fromFetch(`https://philpapers.org/oai.pl?verb=ListRecords&metadataPrefix=oai_dc${token ? `&resumptionToken=${escape(token)}` : ''}`)
  .pipe(
    Rx.flatMap(response => response.text()),
    Rx.flatMap(text => {
      const {
        record: records,
        resumptionToken,
      } = xml.parse(text)['OAI-PMH'].ListRecords;

      // return records;
      return Observable.concat(
        Observable.from(records),
        recordSet$(resumptionToken)
      );
    })
  );

const getLastPartOfPath = path => path.match(/^.*\/(?<key>.*)$/).groups.key;
const getPropName = dcPropName => dcPropName.match(/^dc:(?<prop>\w+)$/).groups.prop;

const getRecordMetadata = record => {
  const metadata = {};
  for (const [key, value] of Object.entries(record.metadata['oai_dc:dc'])) {
    const prop = getPropName(key);
    metadata[prop] = value;
  }

  metadata.title = metadata.title ? String(metadata.title) : null;
  metadata.id = getLastPartOfPath(metadata.identifier);
  delete metadata.identifier;

  metadata.type = getLastPartOfPath(metadata.type);

  if (metadata.subject !== 'Philosophy'){
    console.log(JSON.stringify(metadata));
    debugger;
  }
  return metadata;
}

export const record$ = recordSet$()
  .pipe(
    Rx.map(getRecordMetadata),
    Rx.filter(record => record.language === 'en' && record.title),
  );

// ToDo: Figure out how to parse and decompress data from archive.
const getDoc = id => fromFetch(`https://philpapers.org/archive/${id}`);

const apiId = '904518';
const apiKey = '5KLo4qkvXNl4t8s5';

export const category$ = fromFetch(`https://philpapers.org/philpapers/raw/categories.json?apiId=${apiId}&apiKey=${apiKey}`)
  .pipe(
    Rx.flatMap(response => response.json()),
    Rx.map(array => array[0])
  );
