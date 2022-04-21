import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers =[
  {
  'id' :1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동 ',
  'birthday' : '990102',
  'gender' : '남자',
  'job' : '연예인'

},
{
  'id' :2,
  'image' : 'https://placeimg.com/64/64/wonman',
  'name' : '하하 ',
  'birthday' : '910102',
  'gender' : '남자',
  'job' : '연예인'

},
{
  'id' :3,
  'image' : 'https://placeimg.com/64/64/man',
  'name' : '전소민 ',
  'birthday' : '970102',
  'gender' : '여자',
  'job' : '연예인'

},
]

function App() {
  return (
  <div>

  {
    customers.map(c => {
        return(
     <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday = {c.birthday} gender={c.gender} job={c.job} />
          
        );

    })


  }
   </div>    
  );
}

export default App;
