import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/jobsSlice';

const App = () => {
  const val = useSelector((state) => state.jobs.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increment(10));
  }, [])

  return(
    <div>
      {val}
    </div>
  )
}

export default App;