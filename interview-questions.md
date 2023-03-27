# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: To the best of my knowledge a superclass is when a class calls on another class and is able use the other classes variables and methods

Researched answer: When a class inherits from a superclass it gains access to the superclasses instance methods and variables.
class Movies
def
end

class titles < Movies

2. What is a gem?

Your answer: A gem is a package installer for Ruby that provides functionality for Ruby.

Researched answer: A Ruby gem is a packaged library or "functionality" that can be integrated into Ruby applications. A gem consists of a collection of Ruby code, documents, and metadata and is distributed as a single archive file with a .gem extension.

3. What is a relational database? Are there other kinds of databases?

Your answer: I'm not remembering the whole process exactly of relational databases, but I know that it's a way to store and access data. But I believe there are OOD databases as well. 

Researched answer: A relational database organizezs data into tables that consist of columns and rows. Each table has a unique name and set of columns that define the type of data that is stores. There are NoSQL databases, OOD databases, Hierarchical databeses, Network databases, columnar databases etc.

4. What are primary keys? Why are they important?

Your answer: Primary keys are assigned to a specific value. They can be called on in different code to extract those values. They're important because it prevents duplicates and stores information that will be later utilized.

Researched answer: Primary keys are unique identifiers assigned to each record in a table. They serve as a reference point for other tables that link to the current table. They are important because they help with data accuracy and consistency. Preventing wasted storage space and redundancy.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Hypertext Transfer Protocol. CRUD consists of create, read, update and delete.

Researched answer: The HTTP verbs are GET, POST, PUT, DELETE, CONNECT, TRACE, Patch. GET: corresponds to read and is used to retrive data. POST: corresponds to create and is used to create a new resource. PUT: corresponds to update and is used to update an existing resource. DELETE: well it corresponds to delete and is used to remove existing resources. PATCH: Can correspond to both update and create as it can be used to update an existing resource with data or create a new resource.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Restful routes are used for desingning the urls or endpoints of a web api. Restful routes also utilize CRUD and http verbs.

2. Model validations: Model validation is the process of verifying data that entered into an application and that it meets the requirements. They're typically performed on the server side.

3. Params: Params is short for parameters. Params refer to the data that is sent from a client-side application to a server side app. Usually sent in an HTTP request, which then the server side can use the params to create records, update or perform ui.

4. ERB: ERB stands for Embedded Ruby. It is a template system for web development using Ruby. ERB allows embedding of Ruby code inside HTML, CSS, and other text based files. They typically use a .erb file extension and are enclosed in special tags. <% input here %>

5. API: API stands for Application Programming interface. Protocols, standards, and tools that allows different software applications to communicate with each other. The endpoints can accept input in the form of params, and return output in formats such as JSON or XML.
APIS can allso use HTTP methods such as HTTP verbs.
