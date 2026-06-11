import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F7F7] text-center px-4">
            <h1 className="text-9xl font-bold text-blue-700">404</h1>
            <h2 className="text-3xl font-bold mt-4 text-gray-800">Page Not Found</h2>
            <p className="text-gray-500 mt-3 text-lg">Oops! The page you are looking for does not exist or has been moved.</p>
            <Link href="/">
                <button className="btn btn-info text-white mt-8 px-8">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;