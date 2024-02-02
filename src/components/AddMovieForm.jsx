import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

import axios from 'axios';

const AddMovieForm = (props) => {
  const history = useHistory();
  const { setMovies } = props;
  const {
    data: newMovie,
    setData: setNewMovie,
    loading,
    error,
    doRequest,
    REQ_TYPES,
  } = useAxios({
    title: '',
    director: '',
    genre: '',
    metascore: 0,
    description: '',
  });
  /*  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    genre: '',
    metascore: 0,
    description: '',
  }); */

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* axios
      .post(`https://nextgen-project.onrender.com/api/s11d3/movies`, newMovie)
      .then((res) => {
        setMovies(res.data);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      }); */

    doRequest({
      endpoint: `/movies`,
      reqType: REQ_TYPES.POST,
      payload: newMovie,
    }).then((res) => {
      setMovies(res.data);
      history.push('/movies');
    });
  };

  const { title, director, genre, metascore, description } = newMovie;

  return (
    <div className="bg-white rounded-md shadow flex-1 dark:bg-slate-800 dark:text-white">
      <form onSubmit={handleSubmit}>
        <div className="p-5 pb-3 border-b border-zinc-200 ">
          <h4 className="text-xl font-bold">
            Yeni Film Ekle <strong></strong>
          </h4>
        </div>
        <div className="px-5 py-3">
          <div className="py-2">
            <label htmlFor="title" className="block pb-1 text-lg">
              Title
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={title}
              onChange={handleChange}
              name="title"
              type="text"
              id="title"
            />
          </div>
          <div className="py-2">
            <label htmlFor="director" className="block pb-1 text-lg">
              Director
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={director}
              onChange={handleChange}
              name="director"
              type="text"
              id="director"
            />
          </div>
          <div className="py-2">
            <label htmlFor="genre" className="block pb-1 text-lg">
              Genre
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={genre}
              onChange={handleChange}
              name="genre"
              type="text"
              id="genre"
            />
          </div>
          <div className="py-2">
            <label htmlFor="metascore" className="block pb-1 text-lg">
              Metascore
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={metascore}
              onChange={handleChange}
              name="metascore"
              type="number"
              id="metascore"
            />
          </div>
          <div className="py-2">
            <label htmlFor="description" className="block pb-1 text-lg">
              Description
            </label>
            <textarea
              className="dark:bg-slate-800 dark:text-white"
              value={description}
              onChange={handleChange}
              name="description"
              id="description"
            ></textarea>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
          <Link to={`/movies/`} className="myButton bg-zinc-500">
            Vazgeç
          </Link>
          <button
            type="submit"
            className="myButton bg-green-700 hover:bg-green-600   dark:bg-green-200 dark:hover:bg-green-400 dark:text-slate-800"
          >
            Yeni Filmi Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
