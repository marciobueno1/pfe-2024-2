import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const baseURL = "https://parseapi.back4app.com/classes/Contact";
const headers = {
  "X-Parse-Application-Id": "JlfmJcfKkZ7YSXHCEyy5C9JOyJENvPz010d58P4C",
  "X-Parse-REST-API-Key": "muKqA1NH3t1FS2dvbXoOSnbkww2MQHcxhdV7Vz4n",
};
const headersJSON = {
  ...headers,
  "Content-Type": "application/json",
};

export async function getContacts(query) {
  const response = await fetch(baseURL, { headers });
  const data = await response.json();
  let contacts = data.results;
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  const response = await fetch(baseURL, {
    method: "POST",
    headers: headersJSON,
    body: JSON.stringify({}),
  });
  const contact = await response.json();
  return contact;
}

export async function getContact(id) {
  const response = await fetch(`${baseURL}/${id}`, { headers });
  const contact = await response.json();
  return contact;
}

export async function updateContact(id, updates) {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: headersJSON,
    body: JSON.stringify(updates),
  });
  if (!response.ok) {
    throw new Error("No contact found for", id);
  }
  const contact = await response.json();
  Object.assign(contact, updates);
  return contact;
}

export async function deleteContact(id) {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
    headers: headers,
  });
  return response.ok;
}
