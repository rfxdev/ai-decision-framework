#!/usr/bin/env node
import fs from "fs";

function enhanceSchema(schemaPath) {
  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

  // Find the root Assessment definition
  if (schema.definitions && schema.definitions.Assessment) {
    // Add $schema as an optional property
    schema.definitions.Assessment.properties = {
      $schema: {
        description: "JSON Schema reference",
        format: "uri",
        type: "string",
      },
      ...schema.definitions.Assessment.properties,
    };
  }

  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2));
  console.log(`✅ Enhanced ${schemaPath} with $schema support`);
}

enhanceSchema("schema/assessment.schema.json");
