import a from './a'
import b from './b'
import aa from './aa'

export default [
    {
        path:'/home/a',
        name:"Home",
        component:a,
        children:[
            {path:'/home/a/aa',component:aa,},
        ]
    },
    {path:'/home/b',component:b}
]