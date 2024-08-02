import './App.css'
import AppLayout from './layout'
import AuthProvider from './provider/authProvider'
import Routes from './routes'
import { Provider } from 'react-redux';
import { store } from './stores';

function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppLayout>
            <Routes/>
        </AppLayout>
      </AuthProvider>
    </Provider>
  )
}

export default App
