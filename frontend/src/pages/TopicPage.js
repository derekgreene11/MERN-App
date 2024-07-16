import React from 'react';

function TopicPage() {

    return (
       <>
            <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontEndDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStyleSheets">Cascading Style Sheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javaScript">JavaScript</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                    <p> 
                    A <strong>designated home page</strong> refers to the landing page that is served by the <strong>web server</strong> upon loading a <strong>domain's</strong> root directory (e.g., www.example.com). 
                    For <strong>static</strong> websites, <strong>index.html</strong> is typically the designated home page and contains the <strong>HTML</strong> to be displayed by the browser.
                    In contrast, when a specific page is requested by a user from the web server (e.g., www.example.com/example.html) a file named example.html would be displayed by the browser rather than the index.html file.
                    </p>
                    <p>
                    By using the <strong>Web Dev/Inspector</strong> Network tab output screen, you can get useful information about your website and its functionality. When an <strong>HTTP Request</strong> 
                    is sent to the web server, it includes the <strong>scheme</strong> or <strong>protocol</strong>, the hostname, and optionally, the desired resource on the server. HTTP requests are 
                    sent via the GET method. An <strong>HTTP Response</strong> is sent via the POST method from the web server to the browser and includes the page's status, method, IP address, policy, language, 
                    cache instructions, cache details, content type, dates, status code (e.g., 200) and browser version, etc. All of which are viewable in the Web Dev/Inspector tool. Using the network tab, 
                    you can also view the raw response data (e.g., HTML, CSS, JS).
                    </p>
                    <p>
                    The favicon.ico file responds with a status code 200 because the file is present and accessible. The 404-status code returned for main.css and main.js informs us that the files were not found. 
                    In general, this could be for a variety of reasons such as incorrect <strong>URL</strong>, incorrect file path listed in one of the scripts, or simply the files do not exist. 
                    In this case, the 404 status is returned as the files main.js and main.css do not exist.
                    </p>
                    <p>
                    My web server's URL is using https:// as the scheme and protocol. The <strong>subdomains</strong> used is web.engr. The host domain is oregonstate.edu/ and the resources are 
                    ~greenede/a2-greenede. The scheme identifies what protocol must be used. The subdomain specifies a subsection of the host domain, and the host domain is mapped to the IP 
                    address of the web server. The resource part of the URL further specifies what resources you want to access on the server. 
                    </p>
            </article>
            <article id="frontEndDesign">
                <h3>Frontend Design</h3>
                    <p>
                    <strong>Frontend design</strong> refers to the process of creating the visual aspects of a website. Commonly this includes designing the GUI, the layout of the page,
                    and how the user may interact with the website. In order to create visually appealing websites, frontend developers need to understand how HTML documents are structured with the use 
                    of <strong>elements </strong>and <strong>tags</strong>. Frontend developers also commonly inspect the <strong>viewports</strong> across different devices to ensure their website(s) are displaying correctly
                    when rendered across different screen sizes.
                    </p>      
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>A usable website is effective at aiding the user in accomplishing their tasks.</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>A usable website is efficient, allowing users to complete their tasks quickly and with the least amount of steps.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>A usable website is easy to navigate, which allows unfamiliar users to navigate to the desired section/page with limited knowledge of the website.</dd>
                        <dt><strong>Error-free</strong></dt>
                        <dd>A usable website is error-free to ensure services are functional and accessible.</dd>
                        <dt><strong>Enjoyable</strong></dt>
                        <dd>A usable website is enjoyable to interact with and meets the requirements of the intended user.</dd>
                    </dl>
                    <p>
                    The <strong>header</strong> element describes the information that will be displayed at the very top of the page. This usually contains the name of the website or company. Currently among frontend developers, the
                    trend is to make the header as small as can be so it will always be displayed above the scroll area of the viewport. The <strong>main</strong> element describes the primary section for content that is to be displayed 
                    to users. The <strong>section</strong> element is used to group similar content together. Typically, the initial <strong>child </strong>of a section will be a h1 element describing the topic for that section. In each section element,
                    one can create <strong>article</strong> elements which define specific topics within the section. If multiple article elements are used in a section, they must have an ID in order for them to be uniquely styled from each other in CSS.
                    The <strong>footer</strong> element typically holds the legal information, contact information, and links to important pages. The <strong>nav</strong> element is where links to other pages are placed. Navigation sets usually 
                    include links to main menu, search, about, etc.  
                    </p>
                    <ol>
                        <li>
                            Anchors can link to external content by using setting the <strong>HREF</strong> attribute equal to the path/URL of the external content. The text placed outside the HREF attribute is then treated as a hyperlink, and when clicked,
                            will take the user to the various path/URL specified (e.g., href="https://www.example.com/").
                        </li>
                        <li>
                            Anchors can link to internal content by using <strong>ID</strong>'s. If an element has an ID attribute set, it can be referenced with a hashtag followed by the value of the desired attribute ID (e.g., href="#WebServers").
                        </li>
                        <li>
                            Anchors can link from page-to-page, similarly to external content. Instead of setting the HREF attribute equal to the URL of the external content, it is set equal to the path of the file/page to link (e.g., href="contact.html")
                        </li>
                    </ol>
            </article>
            <article id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>
                    In order to improve <strong>SEO</strong>, descriptive file names and titles should be used. For example, a picture of a dog may be named dog-picture.jpg. Additionally, it is important to ensure file sizes are as small as possible in order to decrease
                    the amount of time the resource takes to load. Also, ensuring high resolution images are only shown when applicable. This is done with the srcset="" and sizes="" attributes. <strong>Lossy</strong> compression results in degraded image quality. 
                    <strong>Lossless</strong> compression results in no degradation to image quality. It is also critical to ensure files match the dimensions they will take up on your website. If the dimensions are bigger than the actual photo, it will take longer to load.
                    It is also critical to make sure the correct file format is used. Generally online photos are .jpg, line-art are .gif and sometimes .png, and photos with true transparency are .png. It is also important to have multiple sizes of each photo available, as 
                    different monitors will have different resolutions. It is also important to make sure the correct color mode is used which is typically <strong>RGB</strong> for .png files, jpg files, .svg files, .webp files, and the color mode is generally <strong>indexed</strong> for .gif files and sometimes .png files. 
                    </p>
                    <p>
                    On websites, the most common file formats are <strong>.gif</strong>, <strong>.png</strong>, <strong>.svg</strong>, <strong>.jpg</strong>, and <strong>.webp</strong>. The .gif format is used for 8-bit transparency, animation, and/or line-art graphics. The .png format is used for true transparency (alpha channel) and is generally used for shapes, line art, and solid colors. 
                    The .svg format is used for two-dimensional, interactive, or animated images. The .jpg format is used for photographic images (personal photos, camera, etc.) The .webp format is used for photographic images (transparent backgrounds possible).
                    </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                    <p>
                    In order to identify a website visually by looking at the browser tab or other places like phones, smartwatches etc., a company logo  is shown in the correct size and file type. 
                    These are commonly referred to as <strong>favicons</strong>, <strong>favorite icons</strong>, or <strong>touch icons</strong>. These icons can be saved as .gif, .png, .ico, and .svg. 
                    Popular formats are .ico .svg and .png. The process works by first modifying a symbol to work best on different devices, next it is saved in different file formats for different browsers and devices. The browser then displays the icon in different places varying from browser to browser but generally in the tab, bookmarks bar, etc. You also need to specify link tags, so the browser will load the most appropriate .ico 
                    for each device that may access your website.
                    </p>
            </article>
            <article id="cascadingStyleSheets">
                <h3>Cascading Style Sheets</h3>
                <p>
                The main reasons to include stylesheets in websites are first, for the design and layout of the website, using CSS allows for consistent styles to be used across elements on a webpage. 
                Also, stylesheets allow you to separate content and different styles from each other. Properly structured content helps those with accessibility issues use your website. Finally, CSS allows for even 
                greater customization than one can get from using HTML alone. 
                </p>
                <p>
                There are several methods one can use to incorporate <strong>styles</strong> into websites. First, you can use <strong>CSS</strong> frameworks like Bootstrap which offer pre-written styles and components for rapid development, 
                consistency, and responsive design. Second, you can define styles directly within HTML documents with style tags in the <strong>head</strong>. This option is not only convenient, but also allows for quick updates or changes.
                For even quicker styling changes or specific overrides, <strong>inline</strong> styles can be applied directly to HTML elements with the <strong>style attribute</strong>. Lastly there is the use of <strong>external stylesheets</strong>. 
                These work by linking separate CSS files to your HTML documents using link tags. Using this method allows for increased modularity, caching, and easy maintenance across multiple pages.
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>
                 The 6 major goals of accessible forms are: 1. Ensure instructions are clear. This step is important as not all users are familiar with filling out forms or your form specifically. 2. Inform users of your intents for 
                 gathering their data. 3. Set the first field in your form to <strong>autofocus</strong>. This allows users to start typing immediately without needing to use a mouse/trackpad. 4. Ensure that users without access to a mouse can still fill 
                 out your form through the use of the keyboard. 5. If forms are in complex orders that may not be very intuitive, add <strong>tab indexing</strong>, so the forms move through fields in the correct order. 6. Ensure error messages are screen readable.
                 The main reason this step is important is because the built-in HTML error messages are not screen-readable. The major tags and their attributes/purposes are as follows: 
                <p><strong>form</strong>: 2 main attributes <strong>action</strong> which defines where the request will be sent and <strong>method</strong> which defines which HTTP method is used <strong>POST</strong> vs. <strong>GET</strong>. The purpose of this 
                tag is to encase the form elements and specify the HTTP method/where to send the form data.</p><p><strong>fieldset & legend</strong>: are used to separate controls. The legend tag is placed on top of the fieldset tag, which helps users understand your forms groups.</p>
                <p><strong>label</strong>: main attribute is <strong>for=""</strong> which is used to match up with the form control's id. The label tag is used to help users understand the purpose of each field</p><p><strong>input</strong>: is one of the most common data-input tags
                and has a special attribute <strong>type=""</strong> that changes how it's displayed. An additional attribute is the <strong>name=""</strong> which is used to specify the name of the data from the form once received on the server. Another important attribute is <strong>required=""</strong>
                 which allows you to set certain fields as required to be filled out to submit the form. This can help ensure you don't get a bunch of bot submissions and that the submissions you do get, are mostly valid. There are also multiple different type attributes you can assign such as 
                <strong>type="email"</strong> which accepts email address input, <strong>type="checkbox"</strong> which creates a box the user can check or uncheck, and <strong>type="radio"</strong> which creates a radio button the user can select. (You can only select 1 radio button, vs you can have multiple check boxes selected).</p>
                <p><strong>select & option</strong>: are used to create drop down lists where the user can select an item in the list. The name attribute is used for the , and the options are listed with the option tag.</p><p><strong>textarea</strong>: this tag allows for large amounts of text input, such as to enter comments or messages.</p>
                <p><strong>button</strong>: this tag is generally used to submit form data and performs the <strong>action=""</strong> specified by the form tag. It is important to ensure forms can be filled out by all types of users. One aspect is ensuring the buttons and input boxes are large enough and have enough space
                to accommodate people with large fingers. Another aspect is to display labels above the fields. In addition, providing a description of each input field is helpful.</p>
                </p>
            </article>
            <article id="express">
                <h3>Express</h3>

                <p>
                 <strong>Node.js</strong> is a <strong>JavaScript</strong> runtime environment that allows you to build and develop server side .js code. <strong>npm</strong> is the package manager for Node.js and is used to install and manage dependencies in Node.js projects. <strong>Express.js</strong> is a web-app framework for Node.js that comes prepackaged
                 with a bunch of helpful APIs and templates. By using all three of these technologies, web developers are able to build rapid, scalable, and efficient web applications. 
                </p>
            </article>
            <article id="javaScript">
                <h3>JavaScript</h3>
                <p>
                 The main data types in <strong>JavaScript</strong> are: <strong>number</strong>, <strong>string</strong>, <strong>boolean</strong>, <strong>undefined</strong>, <strong>null</strong>, <strong>symbol</strong>, <strong>bigInt</strong>, and <strong>objects</strong>.
                 <strong>JSON</strong> stands for JavaScript Object Notation and is a file type used for storing lightweight data. JSON's are language independent and data consists of key-value pairs like JavaScript objects. <strong>Objects</strong> in JavaScript are key-value pairs 
                 in which the key is a string and each value can be any data type. <strong>Arrays</strong> are essentially lists and in javaScript each value is identified by an index number (its order in the list). <strong>Conditionals</strong> and <strong>loops</strong> are key to the logical operations in JavaScript and 
                 are made up of instructions such as if, else, else if, for, while, do while. Conditionals are used to evaluate different blocks of code while loops are used to repeat certain block of code. It is also important to note that you can nest loops or in other words
                 you can have one loop inside of another loop. <strong>Object-oriented</strong> programming is a paradigm based on the idea of objects which can have their own functions and properties. The main principles of OOP are encapsulation, inheritance, polymorphism, and abstraction.
                 <strong>Functional</strong> programming is a paradigm based on the idea of using mathematical functions to solve problems and avoiding changing state and mutable data. Functional programming works to generate code that is concise, declarative, and easier to maintain. 
                </p>
            </article>
        </>  
    );
}
export default TopicPage;