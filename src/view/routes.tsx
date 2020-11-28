const privateRoutes= [
    {
        path:'/private',
        loader : ()=>import('./view-private/private_view')
    }
].filter(Boolean);

const publicRoutes = [
    {
        path:'/public',
        loader: ()=>import('./view-public/public_view')
    },{
        path:'/public/sign-in',
        loader: ()=>import('./auth/SignInPage')
    }
    ,{
        path:'/public/sample-page',
        loader: ()=>import('./sample-page/SamplePage')
    },{
        path:'/public/sample-form-page',
        loader: ()=>import('./sample-form-page/SampleFormPage')
    },{
        path:'/public/sample-form-page-2',
        loader: ()=>import('./sample-form-page-2/SampleFormPage2')
    },{
        path:'/public/sample-form-page-3',
        loader: ()=>import('./sample-form-page-3/SampleFormPage3')
    },{
        path:'/public/sample-form-page-4',
        loader: ()=>import('./sample-form-page-4/SampleFormPage4')
    }
].filter(Boolean)

export default{
    privateRoutes,
    publicRoutes
}