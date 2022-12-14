import { lazy } from 'react'

//Layouts:
import MarketLayout from '../components/layout/market-layout'
import GameLayout from '../components/layout/game-layout'

//Pages
const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))
const CreateNft = lazy(() => import("./create-nft"))
const LoginGame = lazy(() => import("./game/login"))
const Customer = lazy(() => import("./customer"))
const Register = lazy(() => import("./register"))
// const Update = lazy(() => import("./update"))


const routes = [
    {
        path: "/",
        exact: true,
        public: true,
        component: HomePage,
        layout: MarketLayout
    },
    {
        path: "/login",
        exact: true,
        public: true,
        component: LoginGame,
        layout: null
    },
    {
        path: "/collection/detail",
        exact: true,
        public: true,
        component: DetailCollections,
        layout: MarketLayout
    },
    {
        path: "/nft/:id",
        exact: true,
        public: true,
        component: DetailNft,
        layout: MarketLayout
    },
    {
        path: "nft/create",
        exact: true,
        public: true,
        component: CreateNft,
        layout: MarketLayout
    },
    {
        path: "customer",
        exact: true,
        public: true,
        component: Customer,
        layout: MarketLayout
    },
    {
        path: "customer/register",
        exact: true,
        public: true,
        component: Register,
        layout: MarketLayout
    },
    // {
    //     path: "update",
    //     exact: true,
    //     public: true,
    //     component: Update,
    //     layout: MarketLayout
    // },
]

export default routes