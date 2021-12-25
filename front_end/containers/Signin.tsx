import React from 'react';
import { Field, formValues, reduxForm, InjectedFormProps } from 'redux-form';
import { getUser } from '../modules/ActionCreater'
import { useDispatch } from 'react-redux'

type formValues = {
  email: string;
  password: string;
}

const Signin: React.FC<InjectedFormProps<formValues>> = (props) => {
  const dispatch = useDispatch()
  const { handleSubmit } = props

  const renderInput = (field: { input: any; label: any; }) => {
    const { input, label } = field
    return( 
      <div>
        <input {...input} placeholder={label}/>
      </div>
    );
  }

 
  const onSubmit = (formValues: formValues) => {
    dispatch(getUser(formValues))
  }

  return (
    <div>
      <h1>サインイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><Field label="email" name="email" type="text" component={renderInput} /></div>
        <div><Field label="password" name="password" type="text" component={renderInput} /></div>
        <div>
          <button type="submit">ログイン</button>
          <h3>test@kmail.com: aaaaa</h3>
        </div>
      </form>
    </div>
  )
   
  
}
export default reduxForm<formValues>({ form: 'loginForm' })(Signin);



// import React from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { getUser } from '../modules/ActionCreater'
// import { connect } from 'react-redux'

// class Signin extends React.Component {
//   renderInput(field: { input: any; label: any; }) {
//     const { input, label } = field
//     return( 
//       <div>
//         <input {...input} placeholder={label}/>
//       </div>
//     );
//   }


//   onSubmit = (formValues: any) => {
//     this.props.getUser(formValues)
//   }
    
//   render(){
//     const { handleSubmit } = this.props;
//     return (
//       <div>
//         <h1>サインイン</h1>
//         <form onSubmit={handleSubmit(this.onSubmit)}>
//           <div><Field label="email" name="email" type="text" component={this.renderInput} /></div>
//           <div><Field label="password" name="password" type="text" component={this.renderInput} /></div>
//           <div>
//             <button type="submit">ログイン</button>
//             <h3>test@kmail.com: aaaaa</h3>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
// const formWrapped = reduxForm({ form: 'loginForm' })(Signin);

// export default connect( null, { getUser })(formWrapped);

