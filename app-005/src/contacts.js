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
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  let index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
