import React, { Component } from 'react';
import Plan from './Plan';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items:[],
    text:''
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleAdd = () => {
      if(this.state.text !== "")
      {
        const items = [...this.state.items, this.state.text];
        this.setState({ items: items, text:"" });
      }
  }

  handleDelete = (id) => {
    const Olditems = [...this.state.items]
    const items  = Olditems.filter((element,index) => {
      return index !== id
    })

    this.setState({items:items});
  }
  render() {
    return(
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-md-6 mx-auto text-white shadow-lg'>
            <h1 className='text-center'>To-Do</h1>

            <div className='row'>
              <div className='col-md-9'>
                  <input type='text' className='form-control' onChange={this.handleChange} placeholder='Add a task' value={this.state.text} />
              </div>
              <div className='col-md-3'>
                  <button className='btn btn-success px-5 fw-bold btn-block' onClick={this.handleAdd}>Add</button>
              </div>
              <div className='container-fluid'> 
                 
                    <ul className='list-unstyled row m-5'>
                        {
                          this.state.items.map((item, index) => {
                            return <Plan value={item} id={index} key={index} sendData={this.handleDelete} />
                          })
                        }
                    </ul>
                   
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
