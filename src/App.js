
import './App.css';
import Rutas from './routes/Rutas';
import AuthContext, { AuthConsumer } from './context/Auth/AuthProvider';
import FormProvider from './context/Form/FormProvider';

function App() {
  return (
    <>
      <AuthContext>
        <FormProvider>
          <Rutas/>
        </FormProvider>
      </AuthContext>
    </>
  );
}

export default App;
