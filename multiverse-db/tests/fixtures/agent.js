'use strict'

const agent = {
  id: 1,
  uuid: 'yyy-yyy-yyy',
  name: 'fixture',
  username: 'multiverse',
  hostname: 'test-host',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updatedAt: new Date()
}

const agents = [
  agent,
  extend(agent, {
    id: 2, uuid: 'yyy-yyy-yyw',
    name: 'fixture2',
    username: 'multiverse2', connected: false
  }),
  extend(agent, { id: 3, uuid: 'yyy-yyy-yyx' }),
  extend(agent, {
    id: 4, uuid: 'yyy-yyy-yyz',
    name: 'test',
    username: 'test'
  }),


]

function extend(obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: agent,
  all: agents,
  connected: agents.filter(a => a.connected),
  multiverse: agents.filter(a => a.username === 'multiverse'),
  byUuid: id => agents.filter(a => a.uuid === id).shift(),
  byId: id => agents.filter(a => a.id === id).shift()
}