# frozen_string_literal: true

User.create(email: 'user@example.com', password: '111111')

Departament.create(name: 'MileStep')
Departament.create(name: 'LibidoSoft')

Client.create(name: 'Jean Patan', project: '2xmc', departament_id: '1', estimate: '1970', budget: '350', start_date: '01.02.2020')
Client.create(name: 'Michael Yarbrough', project: 'BandIt', departament_id: '1', estimate: '750', budget: '600')
Client.create(name: 'Jamie Rood', project: 'Clowck Work', departament_id: '1', estimate: '350', budget: '4000', start_date: '10.04.2020')
Client.create(name: 'Jordan Goodwin', project: 'Qwki', departament_id: '2', estimate: '282', budget: '600', start_date: '25.03.2020')
Client.create(name: 'Garvin', project: 'Xhamster', departament_id: '2', estimate: '360', budget: '150')
