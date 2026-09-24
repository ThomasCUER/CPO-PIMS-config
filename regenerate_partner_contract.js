const fs = require('fs');

// Read momo.json
const momoData = JSON.parse(fs.readFileSync('momo.json', 'utf8'));

// Parse the data (skip header, which is first line)
const partnerContracts = [];

for (let i = 1; i < momoData.length; i++) {
  const line = momoData[i];
  const parts = line.split('|').map(p => p.trim());
  
  if (parts.length >= 6) {
    const contract = {
      "partner_contract_reference": parts[0],
      "package_id": parts[1],
      "accounting_entity_id": parts[2],
      "risk_type": parts[3],
      "rebilling_type": parts[4],
      "insurance_class": parts[5]
    };
    partnerContracts.push(contract);
  }
}

// Write to partner_contract.json
fs.writeFileSync('partner_contract.json', JSON.stringify(partnerContracts, null, 2));
console.log(`Generated partner_contract.json with ${partnerContracts.length} records`);
