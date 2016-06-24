function index(req, res) {
  res.json({
    message: "Portfolio Jacquelyn Fambrough",
    documentation_url: "https://github.com/jacquelynfambrough/portfolio",
    base_url: "https://j-fam-portfolio.herokuapp.com/",
    endpoints: [
     {method: "GET", path: "/api", description: "Describes available endpoints"}
   ]
  });
}

module.exports.index = index;
