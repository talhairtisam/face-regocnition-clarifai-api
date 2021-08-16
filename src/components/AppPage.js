
import '../App.css';
import Navigation from './Navigation/Navigation';
import Form from './Form/Form';
import ImageView from './ImageView/ImageView';



function AppPage() {

  return (
    <div className="App">
        <Navigation />
        <Form />
        <ImageView />
    </div>
  );
}

export default AppPage;
