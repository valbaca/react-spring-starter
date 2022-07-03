/* Convert a single or array of resources into "URI1\nURI2\nURI3..." */
export default {
    read: str => str.split('\n'),
    write: obj => {
        // If this is an Array, extract the self URI and then join using a newline
        if (obj instanceof Array) {
            return obj.map(resource => resource._links.self.href).join('\n');
        } else { // otherwise, just return the self URI
            return obj._links.self.href;
        }
    }
};