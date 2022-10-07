import { lazy } from "react"


const Layout = lazy(() => import('./layoutComponents/Layout'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const OneThingPage = lazy(() => import('./pages/OneThingPage'));
const IndexPage = lazy(() => import('./pages/IndexPage'));


const route = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <IndexPage />,
            },
            {
                path: 'oneThing',
                element: <OneThingPage />,
            },
            {
                path: 'blog',
                element: <BlogPage />
            }
        ],
    }
]

export default route
