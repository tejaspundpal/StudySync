import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link as ScrollLink, Element } from 'react-scroll';
import ds from '../../../assets/images/datascience/datascienceroadmap.jpg';
import Footer from '../../Footer';
import StudentNavbar from './StudentNavbar';
import { useParams } from 'react-router-dom';

const DataScience = () => {
  const {id} = useParams();
  
  return (
    <>
    <StudentNavbar id={id}/>
    <div className="flex h-screen overflow-y-auto bg-gray-100">
      <div className="bg-gray-200 w-56 p-5 sticky top-0 shadow-lg">
        <ul className="list-none p-0 m-0 space-y-2">
        <a href="#section-one" className="scroll-smooth block text-gray-800 hover:text-blue-600 mb-2">1. What Is Data Science?</a>
          <hr />
          <a href="#section-two" className="block text-gray-800 hover:text-blue-600 mb-2">2. Learn About Applied Statistics and Mathematics</a>
          <hr />
          <a href="#section-three" className="block text-gray-800 hover:text-blue-600 mb-2">3. Learning About Programming or Software Engineering</a>
          <hr />
          <a href="#section-four" className="block text-gray-800 hover:text-blue-600 mb-2">4. Learning About Data Collection and Cleaning</a>
          <hr />
          <a href="#section-five" className="block text-gray-800 hover:text-blue-600 mb-2">5. Learning About Machine Learning and AI</a>
          <hr />
          <a href="#section-six" className="block text-gray-800 hover:text-blue-600 mb-2">6. Learn About Business Acumen, Exploratory Data Analysis, and Storytelling</a>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <div className="mb-8">
          <img src={ds} alt="Data Science Roadmap" className="w-full rounded-lg shadow-md" />
        </div>
        <Element name="section-one" className="mb-8">
          <h2 className="text-xl font-bold mb-4">What Is Data Science?</h2>
          <p>A field that deals with unstructured, structured data, and semi-structured data. It involves practices like data cleansing, data preparation, data analysis, and much more.<br /><br />
            <span className="font-bold">Data science is the combination of statistics, mathematics, programming, and problem-solving; capturing data in ingenious ways; the ability to look at things differently; and the activity of cleansing, preparing, and aligning data.</span><br /><br />
            Therefore, a data science roadmap is a visual representation of a strategic plan designed to help the aspiring IT professional learn about and succeed in the field of data science.
          </p>
        </Element>
        <hr />
        <Element name="section-two" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Learn About Applied Statistics and Mathematics</h2>
          <p>Statistical methods are an integral part of data science, where most data science interviews focus on inferential and descriptive statistics. Mathematics and statistics smooth the road to a better understanding of how algorithms work.<br /><br />
            Therefore, at this stage of your data science roadmap, you should focus on mastering the following:
            <ul className="list-disc pl-5 space-y-2">
              <li><b>Descriptive Statistics:</b> Learn about location estimates (mean, median, mode, trimmed statistics, and weighted statistics), and variability used to describe data.</li>
              <li><b>Inferential statistics:</b> This form of statistics involves defining business metrics, A/B tests, designing hypothesis tests, and analyzing collected data and experiment results using confidence intervals, p-value, and alpha values.</li>
              <li><b>Algebra and Single and Multi-Variate Calculus:</b> These subjects help you better understand gradient, loss functions, and optimizers used in machine learning.</li>
            </ul>
          </p>
        </Element>
        <hr/>
        <Element name="section-three" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Learning About Programming or Software Engineering</h2>
          <p>As you begin your data science journey, you must have a solid foundation. The data science field requires skill and experience in either software engineering or programming. You should learn a minimum of one programming language, such as:
            <ol className="list-decimal pl-5 space-y-2">
              <a href="https://www.simplilearn.com/introduction-to-data-science-with-python-article"><li>Python</li></a>
              <a href="https://www.simplilearn.com/tutorials/sql-tutorial/what-is-sqle"><li>SQL</li></a>
              <a href="https://www.simplilearn.com/tutorials/java-tutorial/what-is-java"><li>Java</li></a>
              <a href="https://www.simplilearn.com/how-to-learn-r-programming-article"><li>R</li></a>
              <a href="https://www.simplilearn.com/scala-programming-article"><li>Scala</li></a>
            </ol>
            Programming Topics to Include
            Data scientists should learn about common data structures (e.g., dictionaries, data types, lists, sets, tuples), searching and sorting algorithms, logic, control flow, writing functions, object-oriented programming, and how to work with external libraries.<br /><br />
            Additionally, aspiring data scientists should be familiar with using <b>Git and GitHub-related elements</b> such as terminals and version control.<br />Check out this Github repo: <a href="https://github.com/donnemartin/data-science-ipython-notebooks">data-science-ipython-notebooks</a><br /><br />
            Finally, data scientists should enjoy a familiarity with SQL scripting.
          </p>
        </Element>
        <hr />
        <Element name="section-four" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Learning About Data Collection and Cleaning</h2>
          <p>Data scientists are often required to find appropriately valuable data that solves problems. They collect this data from many different sources, including APIs, databases, publicly available data repositories, and even scraping if the site permits it.<br /><br />
            However, the data gathered from these sources is rarely ready to use. Instead, it needs to be cleaned and formatted before it's used, using tools such as a multi-dimensional array, data frame manipulation, or employing scientific and descriptive computations. Data scientists typically use libraries like Pandas and NumPy to help turn the information from raw, unformatted data to ready-to-analyze data.<br /><br />
            <b>Selected Data Collection Projects</b><br /><br />
            Practice makes perfect, so try choosing a <a href="https://towardsdatascience.com/data-repositories-for-almost-every-type-of-data-science-project-7aa2f98128b">publicly accessible data set</a>, develop a set of questions related to the dataset’s domain, then practice data wrangling with Pandas or NumPy to get the answers.
          </p>
        </Element>
        <hr />
        <Element name="section-five" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Learning About Machine Learning and AI</h2>
          <p>As you approach the end of your data science roadmap, it’s time to conclude your trip by learning about two fields that heavily rely on data science: Artificial intelligence and Machine Learning. These topics fall into three categories:<br /><br />
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://towardsdatascience.com/reinforcement-learning-101-e24b50e1d292">Reinforcement Learning:</a> This discipline helps you build self-rewarding systems. If you want to understand reinforcement learning, learn how to optimize rewards, create Deep Q-networks, and use the TF-Agents library, to name a few.</li>
              <li><a href="https://www.ibm.com/topics/supervised-learning#:~:text=the%20next%20step-,What%20is%20supervised%20learning%3F,data%20or%20predict%20outcomes%20accurately.">Supervised Learning:</a> This discipline covers regression and classification problems. It would help if you studied simple linear regression, logistic regression, multiple regression, KNNs, polynomial regression, naive Bayes, tree models, and ensemble models. Round out your studies by learning about evaluation metrics.</li>
              <li><a href="https://www.ibm.com/topics/unsupervised-learning#:~:text=the%20next%20step-,What%20is%20unsupervised%20learning%3F,the%20need%20for%20human%20intervention.">Unsupervised Learning:</a> Unsupervised learning features applications such as clustering and dimensionality reduction. Take deep dives into hierarchical clustering, K-means clustering, PCA, and gaussian mixtures.</li>
            </ul>
            <b>Best Courses to learn ML :</b>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://www.learndatasci.com/out/coursera-ibm-machine-learning-python/">Machine Learning with Python — Coursera</a></li>
              <li><a href="https://www.freecodecamp.org/news/best-machine-learning-courses/#9-python-for-data-science-and-machine-learning-bootcamp">Python for Data Science and Machine Learning Bootcamp (Udemy)</a></li>
            </ul>
          </p>
        </Element>
        <hr />
        <Element name="section-six" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Learn About Business Acumen, Exploratory Data Analysis, and Storytelling</h2>
          <p>Time to move on to the next stage of your data science roadmap: data analysis and storytelling. Data analysts, who share a strong affinity with data scientists, draw insights from data, then relay their findings to management in easy-to-understand terms and visualizations.<br /><br />
            As they relate to storytelling, the above responsibilities require proficiency in data visualization (plotting data using libraries like plotly or seaborn) and strong communication skills. In addition, you should learn:<br />
            <ul className="list-disc pl-5 space-y-2">
              <li>Business acumen: Practice asking questions that target business metrics. Additionally, practice writing concise and clear reports, business-related blogs, and presentations.</li>
              <li>Dashboard development: This subject entails using Excel or specialized tools such as Power BI and Tableau to construct dashboards that summarize or aggregate data that helps management make informed actionable decisions.</li>
              <li>Exploratory data analysis: This knowledge covers defining questions, formatting, filtering, handling missing values, outliers, and univariate and multi-variate analysis.</li>
            </ul>
          </p>
        </Element>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DataScience;
