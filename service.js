const Service = {
  _noble:
   Noble {
     initialized: true,
     address: 'unknown',
     _state: 'poweredOn',
     _bindings:
      NobleMac {
        _events:
         [Object: null prototype] {
           stateChange: [Function: bound ],
           addressChange: [Function: bound ],
           scanStart: [Function: bound ],
           scanStop: [Function: bound ],
           discover: [Function: bound ],
           connect: [Function: bound ],
           disconnect: [Function: bound ],
           rssiUpdate: [Function: bound ],
           servicesDiscover: [Function: bound ],
           includedServicesDiscover: [Function: bound ],
           characteristicsDiscover: [Function: bound ],
           read: [Function: bound ],
           write: [Function: bound ],
           broadcast: [Function: bound ],
           notify: [Function: bound ],
           descriptorsDiscover: [Function: bound ],
           valueRead: [Function: bound ],
           valueWrite: [Function: bound ],
           handleRead: [Function: bound ],
           handleWrite: [Function: bound ],
           handleNotify: [Function: bound ] },
        _eventsCount: 21 },
     _peripherals:
      { '27b2a152a8f144278ff3f217d3fc6dd2':
         Peripheral {
           _noble: [Circular],
           id: '27b2a152a8f144278ff3f217d3fc6dd2',
           uuid: '27b2a152a8f144278ff3f217d3fc6dd2',
           address: '',
           addressType: 'unknown',
           connectable: false,
           advertisement:
            { localName: '',
              manufacturerData:
               <Buffer 03 00 00 60 62 00 00 0a bc e1 43 a9 38 25 c0 28 8d 37 50 e5 12>,
              serviceUuids: [ 'fe61' ] },
           rssi: -90,
           services: null,
           state: 'disconnected' },
        '8ce41f422b9b404985df4c01b13984f2':
         Peripheral {
           _noble: [Circular],
           id: '8ce41f422b9b404985df4c01b13984f2',
           uuid: '8ce41f422b9b404985df4c01b13984f2',
           address: '',
           addressType: 'unknown',
           connectable: true,
           advertisement: { manufacturerData: <Buffer 4c 00 10 02 01 08> },
           rssi: -86,
           services: null,
           state: 'disconnected' },
        c14df3d751444c61b54134da75a38a47:
         Peripheral {
           _noble: [Circular],
           id: 'c14df3d751444c61b54134da75a38a47',
           uuid: 'c14df3d751444c61b54134da75a38a47',
           address: '',
           addressType: 'unknown',
           connectable: false,
           advertisement:
            { manufacturerData:
               <Buffer 75 00 42 04 01 80 2e 78 bd bc 73 81 21 7a bd bc 73 81 20 01 00 00 00 00 00 00> },
           rssi: -88,
           services: null,
           state: 'disconnected' },
        bc777697cb8c4ae9928d3392d2d7f68c:
         Peripheral {
           _noble: [Circular],
           id: 'bc777697cb8c4ae9928d3392d2d7f68c',
           uuid: 'bc777697cb8c4ae9928d3392d2d7f68c',
           address: 'ca-fd-f4-c8-7b-4e',
           addressType: 'random',
           connectable: false,
           advertisement: { localName: 'DE1', serviceUuids: [ 'ffff' ] },
           rssi: -82,
           services: [ [Circular] ],
           state: 'connected',
           _events: [Object: null prototype] {},
           _eventsCount: 0 } },
     _services:
      { '27b2a152a8f144278ff3f217d3fc6dd2': {},
        '8ce41f422b9b404985df4c01b13984f2': {},
        c14df3d751444c61b54134da75a38a47: {},
        bc777697cb8c4ae9928d3392d2d7f68c: { a000: [Circular] } },
     _characteristics:
      { '27b2a152a8f144278ff3f217d3fc6dd2': {},
        '8ce41f422b9b404985df4c01b13984f2': {},
        c14df3d751444c61b54134da75a38a47: {},
        bc777697cb8c4ae9928d3392d2d7f68c: { a000: {} } },
     _descriptors:
      { '27b2a152a8f144278ff3f217d3fc6dd2': {},
        '8ce41f422b9b404985df4c01b13984f2': {},
        c14df3d751444c61b54134da75a38a47: {},
        bc777697cb8c4ae9928d3392d2d7f68c: { a000: {} } },
     _discoveredPeripheralUUids:
      [ '27b2a152a8f144278ff3f217d3fc6dd2',
        '8ce41f422b9b404985df4c01b13984f2',
        'c14df3d751444c61b54134da75a38a47',
        'bc777697cb8c4ae9928d3392d2d7f68c' ],
     _events:
      [Object: null prototype] {
        warning: [Function: bound ],
        newListener: [Function: bound ],
        discover: [Function] },
     _eventsCount: 3,
     _allowDuplicates: undefined },
  _peripheralId: 'bc777697cb8c4ae9928d3392d2d7f68c',
  uuid: 'a000',
  name: null,
  type: null,
  includedServiceUuids: null,
  characteristics: null }