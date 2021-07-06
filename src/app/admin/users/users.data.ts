import { InMemoryDbService } from 'angular-in-memory-web-api';
export class UsersData implements InMemoryDbService {
  createDb() {
    const users = [
        {
            id: 1,
            username: 'Alejandra',
            password: 'Alejandra123',
            profile: {
                name: 'Alejandra',
                surname: 'Alzate',
                birthday: new Date(1981, 2, 29),
                gender: 'Femenino',
                image: 'assets/images/profile/ashley.jpg'
            },
            contacts: {
                email: 'Alejandra@gmail.com',
                phone: '(036) 756-9756',
                address: 'Armenia'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: true,
                isDeleted: false,
                registrationDate: '2012-10-13T12:20:40.511Z',
                joinedDate: '2017-04-21T18:25:43.511Z'
            }
        },
        {
            id: 2,
            username: 'Camilo.V',
            password: 'Camilo123',
            profile: {
                name: 'Camilo',
                surname: 'Velez',
                birthday: new Date(1992, 11, 20),
                gender: 'Masculino',
                image: 'assets/images/profile/bruno.jpg'
            },
            contacts: {
                email: 'Camilo@gmail.com',
                phone: '(034) 231-0332',
                address: 'Circasia'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: false,
                isDeleted: false,
                registrationDate: '2011-01-05T08:45:23.511Z',
                joinedDate: '2017-05-20T18:25:43.511Z'
            }
        },
        {
            id: 3,
            username: 'Andres.79',
            password: 'Andres123',
            profile: {
                name: 'Andres',
                surname: 'Montes',
                birthday: new Date(1979, 10, 21),
                gender: 'Masculino',
                image: 'assets/images/avatars/avatar-3.png'
            },
            contacts: {
                email: 'Andres@gmail.com',
                phone: '(033) 457-2308',
                address: 'Tebaida'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: true,
                isDeleted: false,
                registrationDate: '2014-11-01T19:35:43.511Z',
                joinedDate: '2017-06-28T15:25:43.511Z'
            }
        },
        {
            id: 4,
            username: 'julia.a',
            password: 'julia123',
            profile: {
                name: 'Julia',
                surname: 'Aristizabal',
                birthday: new Date(1982, 6, 18),
                gender: 'Femenino',
                image: 'assets/images/profile/julia.jpg'
            },
            contacts: {
                email: 'julia@apple.com',
                phone: '(036) 267-1346',
                address: 'Illinois, Chicago'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: true,
                isDeleted: false,
                registrationDate: '2015-12-06T11:10:20.511Z',
                joinedDate: '2017-06-29T15:15:40.511Z'
            }
        },
        {
            id: 5,
            username: 'Luisa.m',
            password: 'Luisa123',
            profile: {
                name: 'Luisa',
                surname: 'Monte',
                birthday: new Date(1992, 12, 2),
                gender: 'Femenino',
                image: 'assets/images/avatars/avatar-7.png'
            },
            contacts: {
                email: 'Luisa@gmail.com',
                phone: '(034) 267-1346',
                address: 'Circasia'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: true,
                isDeleted: true,
                registrationDate: '2014-01-10T10:20:20.511Z',
                joinedDate: '2017-06-28T12:20:40.511Z'
            }
        },
        {
            id: 6,
            username: 'Alberto.82',
            password: 'Alberto123',
            profile: {
                name: 'Alberto',
                surname: 'Salazar',
                birthday: new Date(1987, 12, 24),
                gender: 'Masculino',
                image: 'assets/images/profile/adam.jpg'
            },
            contacts: {
                email: 'Alberto@gen-el.com',
                phone: '(034) 267-1346',
                address: 'Tebaida'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: false,
                isDeleted: false,
                registrationDate: '2016-11-16T12:20:20.511Z',
                joinedDate: '2017-06-27T14:20:40.511Z'
            }
        },
        {
            id: 7,
            username: 'tereza.s',
            password: 'tereza123',
            profile: {
                name: 'Tereza',
                surname: 'Santos',
                birthday: new Date(1979, 7, 9),
                gender: 'Femenino',
                image: 'assets/images/profile/tereza.jpg'
            },
            contacts: {
                email: 'tereza@airlines.com',
                phone: '(036) 617-2614',
                address: 'Tebaida'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: true,
                isDeleted: false,
                registrationDate: '2010-10-12T16:20:20.511Z',
                joinedDate: '2017-06-29T15:20:40.511Z'
            }
        },
        {
            id: 8,
            username: 'michael.b',
            password: 'michael123',
            profile: {
                name: 'Michael',
                surname: 'Blandon',
                birthday: new Date(1978, 11, 15),
                gender: 'Masculino',
                image: 'assets/images/profile/michael.jpg'
            },
            contacts: {
                email: 'michael@gmail.com',
                phone: '(035) 388-1637',
                address: 'Armenia'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: true,
                isDeleted: false,
                registrationDate: '2009-08-12T16:20:20.511Z',
                joinedDate: '2017-06-30T11:30:40.511Z'
            }
        },
        {
            id: 9,
            username: 'michelle.81',
            password: 'michelle123',
            profile: {
                name: 'Michelle',
                surname: 'Ortiz',
                birthday: new Date(1981, 11, 18),
                gender: 'Femenino',
                image: 'assets/images/avatars/avatar-5.png'
            },
            contacts: {
                email: 'michelle@starbucks.com',
                phone: '(033) 388-1637',
                address: 'Armenia'
            },
            work: {
                company: 'Google',
                position: 'Product designer',
                salary: 5000
            },
            social: {
                facebook: '',
                twitter: '',
                google: ''
            },
            settings: {
                isActive: false,
                isDeleted: true,
                registrationDate: '2012-11-10T18:20:20.511Z',
                joinedDate: '2015-03-29T17:20:40.511Z'
            }
        }

    ];
    return {users};
  }
}
