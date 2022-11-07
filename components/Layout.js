import Nav from './Nav'


const Layout = ({children}) => {
  return (
    <div className='"mx-6 md:max-w-2x1 md:mx-auto font-poppins'>
      <Nav />
      <main>{children}</main> 
      {/* Anything we wrap the Layout component around will now become its child */}
      {/* Assuming this main tag will supplment what is in index.js in the future */}
    </div>
  );
}

export default Layout