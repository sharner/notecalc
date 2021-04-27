# NoteCalc Plan

NoteCalc is a simple notebook-based computational tool designed for mobile devices and small screeens promoting reproducibility and sharing, targeting primarily education. NoteCalc allows instructors to create notebooks and share them with students. Students can learn, experiment, and complete assignments in notebooks and shared them with instructors from an iOS app.

## History

For the last 40 years, Jim Harner promoted the interface between statistics and computer science. This is become data science, and into his mid-seventies Jim remained on the cutting edge, embracing XListStat, R, statistics, data visualization, machine learning, cloud computing, and reproducibility while advancing science through statistis in medicine, bioremediation, genomics, agriculture, and mostly recently in the WVU businses school. He taught statistic methods to an untold numbers of statisticians, scientists, and business people. Throughout this time, he developed his software, with the help of Mark Liback, Chris Grant, and others. Yet he always dreamed launching a software product that was black-turtleneck elegant and commericially successful.

NoteCalc aspires to this vision, based on decades of Jim's work.

## Challenge

A wide range of courses in science, business, economics, mathematics, statistcs, and computer science require students to analyze data and perform computations. Tradionally, these courses have used calculators, which are limited to toy problems in the computer age. Some courses turn to Excel, which obscures the steps of computation and is hard to share. Recognizing that this is no longer acceptable, instructors have turned to R and Python. Unfortunately, solving real problems, even on small datasets, means installing software packages complex dependencies, like R and Python, which is a nightmare called "it works on my machine". This is a huge pain point in university courses, and it is a non-starter in high schools. Fundamentally, NoteCalc makes data and computation more accessible and reproducible, making it feeasible for instructors to use notebooks and tools like R and Python in a wider range of courses with less technically savvy students, even replacing traditional calculators.

Furthermore, tradionally data compute and analysis tools, such as R and Python, are desktop or browser centric, and often require the commandline. Desktop systems are designed for running IDEs in large screens. Mobile devices offer unique advantages over desktop systems when working on homework, and they are more widely available, especially for High School students.

## Beyond Teaching

NoteCalc has enormous uses beyond education, but the strategy is to achieve adoption starting in education. The focus on education also pays tribute to Jim's commitment to giving students a solid grounding in the best practices of working with data and computation. If one chooses, they can NoteCalc for any purpose. NoteCalc is somewhere between a calculator, spreadheet, and general data analyse tool that you have with you all the time. It will spread organically beyond education.

## NoteCalc Principals

* Run primarily mobile devices, including phones, iPads, iPad OSMO, 12" laptops, and AR headsets

* Scales to large dataset and compute intensive tasks using a cloud-based backend

* Embrace mobile app concepts, such as feeds, deep-linking, and sharing

* Integratee the mobile camera for input to capture formulas, text, expressions, and data

* Use intelligent recommendations, [language servers](https://cran.r-project.org/web/packages/languageserver/index.html), templates, and UI shortcuts to streamline authoring

* Separate data, text, code, and math in plain text

* Store data a columar format in Arrow storage and exchange

* Complement R Studio, VS Code, and Jupyter Notebooks, maintaining compatibility through R Markdown

* Support reproducibility to enable sharing

## NoteCalc Scenario: Exporting / Importing from RStudio and Sharing to Mobile

Brad is a professor in a business school teaching a course in business risk management that involves running a Monte Carlo simulation to assess the probability of business outcomes, as dsecribed in [this blog post](https://towardsdatascience.com/intro-to-monte-carlo-simulations-using-business-examples-794fae76e832).

1. Brad launches RStudio and creates an RMarkdown Document, explaining the concepts and the code. In the text section, he includes formulas in LaTeX. He is using several CRAN packages, and an RPackage installed from github as well as a few local supporting `*.R` files. He is using a dataset running on his local machine, loaded from CSV. His markdown document has many sections and text interspersed with R code.

1. Brad saves the notebook to his NoteCalc account from within RStudio the NoteCalc RStudio plugin. The plugin inspects the notebook and suggests data and code files that should be uploaded with the to NoteCalc.

1. In the NoteCalc App, Brad shares the notebook with his students, who access it through their NoteCalc apps.

1. In his lecture, Brad opens the notebook on an iPad and screencasts to remote students over Zoom and to the classroom TV using Chromecast.

1. He runs each code block, explaining the code and the output at each step. He edits some parameters, using R Shiny-like sliders to demonstrate concepts, show how changes to input effects the output. The output consists of nicely rendered ggplot2 graphs and tibbles.

1. He forks the notebook, and he adds a new cell and writes a Dplyr pipeline, selecting a pipeline template and with autocompletee to reduce typing, to show how to aggregate results by a column. He shares the fork with the class.

1. While having lunch with a colleague, he shows the notebook on his iPhone. His colleague spots a problem with a formula in the documentation, and Brad fixes it by editing the LaTeX formula.

1. Brad tags a new version of the notebook. Students have the option of moving to the new version.

1. The colleague also makes a few otheer suggestions, which he plans to implement back in the office. Back in his office using RStudio on a big screen, Brad pulls the new version of the notebook into his environment. However, the previous evening he upgraded his R version, which may be incompatiblee, and he doesn't want to push the new version to his students.

1. Brad decides instead to fetch a container and run R inside the container. He makes the changes, and pushes and tag an update to the notebook in NoteCalc.

1. In the app, students are notified that the notebook has been updated, and they can update to the new version, performing a merge. The merge is intelligently able to ignore output and limit the update to text and code.

## NoteCalc Scenario: Using as Excel

Anna is taking a finance class. She has a table of data. She needs needs to edit some data, and then add a new column with the present value (PV). Unlike Excel, the step are transparent, versioned and reproducible

1. Anna adds a table edit block that opens an table editor, allowing her to edit individual cells in dataframe.

1. She changes soome of the data and saves the block, which inserts R code to update the values.

1. She adds the PV function in a code block and tests its

1. She uses Dplyr to create a column from an existing column by mapping the PV function

1. She shares the notebook with her instructor, who reviews the commit with the timestamp closest to the due date.

## NoteCalc Scenario: Using as a Calculator

Sophia is taking a calculus course and needs to graph $f(x) = x^2$ and $f'(x)$, its derivative. NoteCalc uses R, which is not Mathematica, but has extensions to simplify traditional plotting applications.

1. Sophia creates a new notebook

1. She adds a block defining an R function for $f(x)$ and $f'(x)$ called `f` and `df`, resp.

1. She then calls the NoteCalc function `nc_graph(f, from=-10, to=10)` to graph the function, using `ggplot2` under the hood and thus customizable for advanced users.

1. She copies the graph as an `.png` and pastes it into her homework, which is a google doc.

## NoteCalc Scenario: Visual Data Entry

Longterm, NoteCalc uses the Camera on the phone for intelligent data entry.

1. While having lunch with a colleague, Brad shows the notebook on his iPhone. His colleague spots a problem, and writes the correct formula on paper.

1. Brad captures a photo, the photo is converted into LaTeX and inserted into the document.

1. In the classroom, Brad presents from an iPad with an Osmo. He clicks to add visual cell to the notebook, and writes down on paper the expression `A . m` for matrix `A` multipled by a vector `m`. The cell is evaluated and the result displayed real-time. He exits visual mode and sees the cell inserted a R code into the table.

## NoteCalc: Large External Data Sets

Longterm, NoteCalc leverages Apache Arrow to perform operations on data lakes in S3, HDFS, or relational databases using the Arrow DataSet API or Query APIs. NoteCalc can leverage Nvidia RAPIDs to perform GPU accelerated operations on Arrow Tables.

## NoteCalc: Machine Learning and Deep Learning

Machine learning and deep learning R packages like `caret`, `Torch` and `Tensorflow` work fine. Longterm, they can run with GPU acceleration to support machine learning courses.

## NoteCalc: VS Code

Longterm, non-iOS and Android will be supporteed with a VS Code plugin, covering Windows and Linux for non-RStudio users.

## Behind the Scenes

App, RStudio Plugin, and Cloud-based system do the following behind the scene. Some of this is letting my mind run and some are thinks I picked up from Mark and Chris, who should fill this out more thoroughly.

1. RStudio plugin tracks down dependencies and the versions of R and packages required by the notebook, probably using the [RStudio Addins](https://rstudio.github.io/rstudioaddins/).

1. Data is converted into [Apache Arrow](https://arrow.apache.org/) and stored, versioned, under the datasets associated with the users' accounts.

1. The environment is reflected in a Dockerfile and immediately compiled into a Docker Image, under the users' accounts.

1. The notebook is stored in RMarkdown without any output, stored in Git. R Markdown has an ANTLR-based parser and is validated using [commonmark](https://commonmark.org/).

1. All compute is done on a K8s cluster running on Digital Ocean

1. Communication is handled with WebSockets.

1. Autocompletioon in R is done with the [R Language Server](https://cran.r-project.org/web/packages/languageserver/index.html).

1. Autocompletion in LaTeX is done with the [LaTeX Language Server](https://github.com/latex-lsp/texlab).

1. Output for the most recent run of each branch of the notebook is cached in chunks and use to display the notebook in the app. The data representation is a graph of Arrow Scalars (variables, arrays, images, etc.)

1. [Auth0](https://auth0.com/) is used for user management.

1. Asynchronous communication is done with [Pusher](https://pusher.com/).

1. Several R package streamline working with R, such as simple graphing functions an UI controls, which are JS.

1. Question: is rendering done in a Web Component?

## Open Source

Jim wished for much of NoteCalc to be open source. The NoteCalc team will contribute to parsers, Dockerfiles, and new R packages, as well as contributions to existing projects like, language servers, Apache Arrow, R, and R packages.

## Project Milestones

1. Find three university faculty who will agreee to use it if it works.

1. Good feedback from a cohort of 20 enterprising students who user test and then beta test.

1. The second milestone is a Beta the in a class taught by an instructor.

## Revenue Model

The app is free to use with a premium in-app purchases for two modules:

* Classroom support, which facilitates onboarding classes of students and class sharing

* High-performance support, for storing large datasets and higher compute limits, including GPUs, targeting Big Data and Machine Learning

## Competition

These examples came from Dani, who used them in his course work. This is an evolving list

* [Desmos](https://www.desmos.com/calculator) is a cool graphing calculator, but not a notebook

* [Notability](https://www.gingerlabs.com/) can take handwriting and convert it into text for notes


