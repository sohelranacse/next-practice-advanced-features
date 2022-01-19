import Link from "next/link";

function Navbar() {
  const linkAddress = 
  [
    {
      'url' : '/',
      'name' : 'Home'
    },
    {
      'url' : '/basic_features',
      'name' : 'Basic Features'
    },
    {
      'url' : '/routing',
      'name' : 'Rounting'
    },
    {
      'url' : '/middleware',
      'name' : 'Middleware'
    },
    {
      'url' : '/production',
      'name' : 'Production'
    },
    {
      'url' : '/deployment',
      'name' : 'Deployment'
    },
    {
      'url' : '/authentication',
      'name' : 'Authentication'
    },
    {
      'url' : '/Testing',
      'name' : 'Testing'
    },
    {
      'url' : '/advancedFeatures',
      'name' : 'Advanced Features'
    },
    {
      'url' : '/apiReference',
      'name' : 'API Reference'
    }
  ]
  
  return (
    <div className="w-2/12 flex flex-row bg-gray-100">
      <div className="flex flex-col w-56 bg-gery rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">NEXT.JS</h1>
        </div>

        <ul className="flex flex-col py-4">

          {linkAddress.map((address, i) => (
            <li key={i}>
              <Link href={address.url} passHref>
                <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-sm font-medium">{address.name}</span>
                </a>
              </Link>
            </li>
          ))}

        </ul>

      </div>
    </div>
  );
}

export default Navbar;
