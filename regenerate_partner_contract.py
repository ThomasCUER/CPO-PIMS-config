import json

# Read momo.json
with open('momo.json', 'r') as f:
    momo_data = json.load(f)

# Parse the data (skip header, which is first line)
partner_contracts = []

for line in momo_data[1:]:  # Skip header
    parts = [p.strip() for p in line.split('|')]
    if len(parts) >= 6:
        contract = {
            "partner_contract_reference": parts[0],
            "package_id": parts[1],
            "accounting_entity_id": parts[2],
            "risk_type": parts[3],
            "rebilling_type": parts[4],
            "insurance_class": parts[5]
        }
        partner_contracts.append(contract)

# Write to partner_contract.json
with open('partner_contract.json', 'w') as f:
    json.dump(partner_contracts, f, indent=2)

print(f"Generated partner_contract.json with {len(partner_contracts)} records")
