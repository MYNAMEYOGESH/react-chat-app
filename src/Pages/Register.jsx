import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
   <section id="hero" className="d-flex alingn-item-center justify-content-center">
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-sm-12">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h6 className="display text-center text-success">Register Here</h6>
                    </div>
                    <div className="card-body">
                        <form autoCapitalize="off">
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' id='mane' className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">email</label>
                                <input type="email" name='email' id='email' className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' id='mane' className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="file">file</label>
                                <input type="file" name='file' id='file' className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                              
                                <input type="submit" value="Register" className='btn btn-warning '/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                    <Link to={`/login`} className="btn btn-link">Alredy Registered Here</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Register