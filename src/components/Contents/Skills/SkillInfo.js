import IconBootstrap from '../../../assets/icons/Bootstrap.png';
import IconCSS from '../../../assets/icons/CSS3.png';
import IconJS from '../../../assets/icons/JS.png';
import IconAxios from '../../../assets/icons/Axios.svg';
import IconRedux from '../../../assets/icons/Redux.png';
import IconRest from '../../../assets/icons/RestAPI.png';
import IconPandas from '../../../assets/icons/Pandas.png';
import IconNumPy from '../../../assets/icons/NumPy.png';
import IconSPM from '../../../assets/icons/SPM.png';
import IconMySQL from '../../../assets/icons/MySQL.png';
import IconMongoDB from '../../../assets/icons/MongoDB.png';
import IconPostgres from '../../../assets/icons/PostrgresSQL.png';
import IconMariaDB from '../../../assets/icons/MariaDB.png';
import IconGit from '../../../assets/icons/Git.png';
import IconGitHub from '../../../assets/icons/Github.png';
import IconBitBucket from '../../../assets/icons/BitBucket.png';
import IconSourceTree from '../../../assets/icons/SourceTree.png';
import IconPhotoshop from '../../../assets/icons/Photoshop.png';
import IconIllustrator from '../../../assets/icons/Illustrator.png';
import IconAfterEffects from '../../../assets/icons/AfterEffects.png';
import IconLightroom from '../../../assets/icons/Lightroom.png';
import IconWord from '../../../assets/icons/Word.png';
import IconExcel from '../../../assets/icons/Excel.png';
import IconPowerPoint from '../../../assets/icons/PowerPoint.png';
import IconWindows from '../../../assets/icons/Windows.png';
import IconMac from '../../../assets/icons/MacOs.png';
import IconLinux from '../../../assets/icons/Linux.png';
import IconPHP from '../../../assets/logos/PHP.png';
import IconDiagrams from '../../../assets/icons/DiagramsDotNet.png';
import IconFigma from '../../../assets/logos/Figma.png';

const SkillInfo = () => {

    const FlashcardInfo = {
        Titles: ["React",
                 "Django",
                 "Python",
                 "Matlab",
                 "Database",
                 "Version Control",
                 "Design",
                 "PHP",
                 "Adobe",
                 "Microsoft Office",
                 "Operating System"],
        Information: [["Proficient in JavaScript, HTML, and CSS to design front-end web applications. Extensively used libraries such as Axios for sending API requests, Redux for managing app-wide state, and Bootstrap for styling and componets","Developed and deployed three full-stack web applications using React for front-end in 2021", "Competent with Document Object Model (DOM), lifecycle, and hooks"],
                      ["Developed and deployed two full-stack web apps using Django in 2021, implementing a static database and a dynamic database, respectively", "Set up Rest APIs for use in two released apps"],
                      ["Spent over 5 years studying and working in Python. Practiced object oriented programming, Big-O optimization, mathematical profiency (mostly using Project Euler), and scripting for NAS management", "Familiar with NumPy for data analysis and mathematical functions. Used Pandas with large series to analyze and visualize data. Learned Django framework, specifically for backend use"],
                      ["Used Matlab extensively for statistical analysis of neurological fMRI data in Helen Wills Neuroscience Institute at UC Berkeley.","Used SPM (Statistical Parametric Mapping) package for multiple regression and other analyses.","Implemented neural network pattern classification analysis and published scientific paper results."],
                      ["Used MySQL extensively for storing and analyzing large sets of fMRI statistical data. Used also for static database in web application","Used PostgresSQL for dynamic database in web application back-end.","Used MariaDB for website development and hosting on personal NAS (WordPress)"],
                      ["Mainly use Git for project version control. Familiar with SourceTree, but have mainly used command-line interface to push to, pull from, and clone repositories","Using Bitbucket repositories for full stack applications and Github repositories for personal projects."],
                      ["Collaborated online and in-person with teammates to design app look, style, and flow", "Created and presented mock-ups to propose stlye and flow of web app", "Used design tools to create flow charts of larger project ideas, features, and goals."],
                      ["Used Python, PHP, and HTML to implement cryptocurrency trading bot that interfaced with an online exchange (Poloniex) and executed buys and sells based on market conditions"],
                      ["Extensively worked with Photoshop to edit photos and pictures for posters, flashcards, presentations, and personal use", "Used Illustrator to create vectorized images for web app projects","Used After Effects to design animated images for use in web apps","Used Lightroom to edit personal photos from SLR camera"],
                      ["Proficient at using Microsoft Word to create documents, worksheets, flashcards, posters, forms, etc. for both professional and private use", "Also proficient at Microsoft Excel to model data, perform analyses, make graphs, budget finances, calculate competition scoring, etc.", "Extensive use with Microsoft PowerPoint for scientific slides and class presentations. Used to teach online lessons"],
                      ["Proficient using Windows, MacOS, and Linux. Have used all three for programming and development. Mostly familiar with Red Hat for professional use and Ubuntu for personal use.           "]],            
        Images: [[IconJS, IconCSS, IconRedux, IconAxios, IconBootstrap],
                 [IconRest],
                 [IconPandas, IconNumPy],
                 [IconSPM],
                 [IconMySQL, IconPostgres, IconMongoDB, IconMariaDB],
                 [IconGit, IconBitBucket, IconGitHub, IconSourceTree],
                 [IconDiagrams, IconFigma],
                 [IconPHP],
                 [IconPhotoshop, IconIllustrator, IconAfterEffects, IconLightroom],
                 [IconWord, IconExcel, IconPowerPoint],
                 [IconWindows, IconMac, IconLinux]],
        // Image properties is used for icon placement, [x, y], x = number of icons, y = size (icons should be square-ish, so all sides about equal)
        ImageProperties: [[5, 70],
                          [1, 63],
                          [2,27],
                          [1, 38],
                          [4, 70],
                          [4, 72],
                          [2, 37],
                          [1, 34],
                          [4, 73],
                          [3, 55],
                          [3, 47]]
                
    }

    return(
        FlashcardInfo
    )
}

export default SkillInfo;