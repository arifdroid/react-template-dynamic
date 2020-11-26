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
    }
].filter(Boolean)

export default{
    privateRoutes,
    publicRoutes
}