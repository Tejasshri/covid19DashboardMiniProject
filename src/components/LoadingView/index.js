import Loader from 'react-loader-spinner'

const loadingContainer = {
  height: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const LoadingView = () => (
  <div style={loadingContainer}>
    <Loader type="TailSpin" color="#15f4ff" strokeWidth="5" height="50" />
  </div>
)

export default LoadingView
