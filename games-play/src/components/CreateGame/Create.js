import { useState } from "react";

export default function Create({
    onCreateGameSubmit,
}){

    const [values, setValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onCreateGameSubmit(values);
    }

    return (
        <>
        <section id="create-page" className="auth">
              <form id="create" onSubmit={onSubmit}>
                  <div className="container">
  
                      <h1>Create Game</h1>
                      <label htmlfor="leg-title">Legendary title:</label>
                      <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title" placeholder="Enter game title..."/>
  
                      <label htmlfor="category">Category:</label>
                      <input value={values.category} onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Enter game category..."/>
  
                      <label htmlfor="levels">MaxLevel:</label>
                      <input value={values.maxLevel} onChange={onChangeHandler} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>
  
                      <label htmlfor="game-img">Image:</label>
                      <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>
  
                      <label htmlfor="summary">Summary:</label>
                      <textarea value={values.summary} onChange={onChangeHandler} name="summary" id="summary"></textarea>
                      <input className="btn submit" type="submit" value="Create Game"/>
                  </div>
              </form>
          </section>
        </>
    );
}