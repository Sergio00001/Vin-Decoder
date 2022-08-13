import { MainPage } from "../pages/MainPage";
import { VariableIdPage } from "../pages/VariableIdPage";
import { VariablesPage } from "../pages/VariablesPage";

export const router = [
    { path: '/', element: <MainPage /> },
    { path: '/variables', element: <VariablesPage /> },
    { path: '/variables/:id', element: <VariableIdPage /> },
    { path: '*', element: <MainPage /> },
]