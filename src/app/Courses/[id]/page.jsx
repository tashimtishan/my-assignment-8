const CourseDetailspage = async({params}) => {
    const {id}=await params;
    console.log("id no:",id);
    return (
        <div>
            <h2>This is course details page</h2>
        </div>
    );
};

export default CourseDetailspage;