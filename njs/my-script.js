function handler(r) {
    var yamlDoc = YAML.parseDocument(r.requestText);
    var json = JSON.stringify(yamlDoc.toJSON())
    r.return(200, json);
}

export default {handler}
