
export const TEXT_DELIMITER = '\n';
export const FIELDS_DELIMITER = ',';
export const WHITESPACE_DELIMITER = ' ';

export const mapFor1Customer = [
  ['VAD', 'vehicleID'],
  ['DAQ', 'driverLicense'],
  ['VAL', 'year'],
  ['VAK', 'make'],
  ['VAM', 'model'],
  ['VAT', 'weight'],
  ['ZEC', 'weight'],
  ['VAO', 'vechBody'],
  ['BBCZEA', 'fuelType'],
  ['FUL', 'fuelType'],
  ['RAG', 'dateRegistExpiration'],
  ['DBB', 'dateOfBirth'],
  ['DCG', 'placeOfBirth'],
  ['NAA', 'lastName'],
  ['DCS', 'lastName'],
  ['RBD', 'lastName'],
  ['NAE', 'firstName,middleName'],
  ['DCT', 'firstName,middleName'],
  ['RBENEF', 'firstName'],
  ['NAR', 'address'],
  ['DAG', 'address'],
  ['RBI', 'address'],
  ['NAT', 'city'],
  ['DAI', 'city'],
  ['RBK', 'city'],
  ['RBL', 'city2'],
  ['NAU', 'state'],
  ['DAJ', 'state'],
  ['RBM', 'state'],
  ['NAV', 'zipCode'],
  ['DAK', 'zipCode'],
]

export const mapFor2Customer = [
  ['VAD', 'vehicleID'],
  ['DAQ', 'driverLicense2'],
  ['VAL', 'year'],
  ['VAK', 'make'],
  ['VAM', 'model'],
  ['VAT', 'weight'],
  ['ZEC', 'weight'],
  ['VAO', 'vechBody'],
  ['BBCZEA', 'fuelType'],
  ['FUL', 'fuelType'],
  ['RAG', 'dateRegistExpiration'],
  ['DBB', 'dateOfBirth'],
  ['DCG', 'placeOfBirth'],
  ['NAA', 'lastName2'],
  ['DCS', 'lastName2'],
  ['RBD', 'lastName2'],
  ['NAE', 'firstName2,middleName2'],
  ['DCT', 'firstName2,middleName2'],
  ['RBENEF', 'firstName2'],
  ['NAR', 'address2'],
  ['DAG', 'address2'],
  ['RBI', 'address2'],
  ['NAT', 'city3'],
  ['DAI', 'city3'],
  ['RBK', 'city3'],
  ['RBL', 'city4'],
  ['NAU', 'state2'],
  ['DAJ', 'state2'],
  ['RBM', 'state2'],
  ['NAV', 'zipCode2'],
  ['DAK', 'zipCode2'],
]

export function delimeter (map, text) {

  const requiredFields = new Map(map)

    let user = {}
    const replaceValues = ['\r', '\\', '}']
    requiredFields.forEach((value, key) => {
        text.forEach(e => {
          if(e.startsWith(key)) {

            let textValue = e.replace(key, '');
            replaceValues.forEach(x => {
                textValue = textValue.replace(x, '');
            })

            if(value.includes(FIELDS_DELIMITER)){
              const fields = value.split(FIELDS_DELIMITER);
              const values = textValue.split(WHITESPACE_DELIMITER);

              fields.forEach((field, i) => {
                user[field] = values[i];
              })

            } else {
              user[value] = textValue;
            }
          }
        })
      });

    return user
}