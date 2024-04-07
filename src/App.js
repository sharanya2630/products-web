import React, { useState, useEffect } from "react";
import {
  TextField,
  Container,
  Grid,
  Divider,
  Button,
  Card,
  CardContent,
  Select,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Menu, MenuItem, Checkbox, FormControlLabel } from "@mui/material";

import "./App.css";
function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.image} alt={product.title} className="img" />
      </div>
      <h5>{product.title}</h5>
      <p>{product.category}</p>
      <p>${product.price}</p>
    </div>
  );
}

function ProductShowcase() {
  const [data, setData] = useState(null);
  const [showRecommended, setShowRecommended] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const [showCategories, setShowCategories] = useState(false);
  const [showFilter, setShowFilter] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([
    { name: "Recommended ", checked: false },
    { name: "Popular", checked: false },
    { name: "Baby & Kids", checked: false },
  ]);

  const [categories, setCategories] = useState([
    { name: "Men", checked: false },
    { name: "Women", checked: false },
    { name: "Baby & Kids", checked: false },
  ]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleRecommended = () => {
    setShowRecommended(!showRecommended);
  };

  const handleCheckboxChange = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].checked = !updatedCategories[index].checked;
    setCategories(updatedCategories);
  };

  const allUnchecked = categories.every((category) => !category.checked);

  return (
    <div>
      <div className="top">
        <div>
          <p>Lorem ipsum dolor</p>
        </div>
        <div>
          <p>Lorem ipsum dolor</p>
        </div>
        <div>
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
      <div className="container">
        <div position="static">
          <div className="top-card">
            <img
              src="https://i.ibb.co/c8nzPhb/Whats-App-Image-2024-04-07-at-19-12-51.jpg"
              alt="Logo"
              style={{ width: "30px", height: "30px", marginRight: "60px" }}
            />
            <Typography
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "800",
                color: "black",
                marginLeft: "100px",
              }}
            >
              LOGO
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingBagOutlinedIcon />
            </IconButton>
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <h1 className="header-bottom-text">Eng</h1>
            <IconButton
              onClick={handleLanguageMenuOpen}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
            >
              <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleLanguageMenuClose}
              MenuListProps={{
                "aria-labelledby": "language-menu",
              }}
            >
              <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
              <MenuItem onClick={handleLanguageMenuClose}>Spanish</MenuItem>
              {/* Add more languages as needed */}
            </Menu>
          </div>
          <Grid container spacing={2} className="header-bottom-card">
            <div>
              <h1 className="header-bottom-text">SHOP</h1>
            </div>

            <div>
              <h1 className="header-bottom-text">SKILLS</h1>
            </div>

            <div>
              <h1 className="header-bottom-text">STORIES</h1>
            </div>

            <div>
              <h1 className="header-bottom-text">ABOUT</h1>
            </div>

            <div>
              <h1 className="header-bottom-text">CONTACT US</h1>
            </div>
          </Grid>
        </div>
      </div>
      <Divider color="#E5E5E5" className="divider" />
      <div className="second-card">
        <div className="header-bottom ">
          <h1 className="text">DISCOVER OUR PRODUCTS</h1>
          <p className="header-bottom-para">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <Divider color="#E5E5E5" />
        <div className="main-hide-card">
          <div className="hide-card">
            <div>
              <h1 className="header-bottom-text">3425 ITEMS </h1>
            </div>
            <div>
              HIDE FILTER
              {showFilter ? (
                <ExpandLessIcon onClick={toggleFilter} />
              ) : (
                <ExpandMoreIcon onClick={toggleFilter} />
              )}
            </div>
          </div>
          <div>
            <div>
              <div className="sub-card">
                <div className="arrow-card">
                  <h1 className="header-bottom-text">RECOMMENDED</h1>
                  <IconButton onClick={toggleDetails}>
                    {showDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </div>
                {showDetails && (
                  <Card className="details-card">
                    <CardContent>
                      <Typography>Recommended</Typography>
                      <Typography>NEWEST FIRST</Typography>
                      <Typography>POPULAR</Typography>
                      <Typography>PRICE : HEIGH TO LOW</Typography>
                      <Typography variant="body1">
                        PRICE : LOW TO HEIGH
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
        <Divider color="#E5E5E5" />
        <div className="bottom-card">
          {showFilter && (
            <div className="bottom-sub-card">
              <h1 className="header-bottom-text">
                <input type="checkbox" />
                Customize
              </h1>
              <Divider className="black" />

              <div className="sub-card">
                <div className="arrow-card">
                  <div className="i-card">
                    <h1 className="header-bottom-text">IDEAL FOR</h1>
                    <p>All</p>
                  </div>
                  <div onClick={toggleCategories}>
                    {showCategories ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon checked={false} />
                    )}
                  </div>
                </div>
                {showCategories && (
                  <div>
                    {allUnchecked && <p>Unselect All</p>}
                    {categories.map((category, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={category.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <label>{category.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Divider color="#E5E5E5" />
              <div className="sub-card">
                <div className="arrow-card">
                  <div className="i-card">
                    <h1 className="header-bottom-text">IDEAL FOR</h1>
                    <p>All</p>
                  </div>
                  <div onClick={toggleCategories}>
                    {showCategories ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon checked={false} />
                    )}
                  </div>
                </div>
                {showCategories && (
                  <div>
                    {allUnchecked && <p>Unselect All</p>}
                    {categories.map((category, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={category.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <label>{category.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Divider color="#E5E5E5" />
              <div className="sub-card">
                <div className="arrow-card">
                  <div className="i-card">
                    <h1 className="header-bottom-text">IDEAL FOR</h1>
                    <p>All</p>
                  </div>
                  <div onClick={toggleCategories}>
                    {showCategories ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon checked={false} />
                    )}
                  </div>
                </div>
                {showCategories && (
                  <div>
                    {allUnchecked && <p>Unselect All</p>}
                    {categories.map((category, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={category.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <label>{category.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Divider color="#E5E5E5" />
              <div className="sub-card">
                <div className="arrow-card">
                  <div className="i-card">
                    <h1 className="header-bottom-text">IDEAL FOR</h1>
                    <p>All</p>
                  </div>
                  <div onClick={toggleCategories}>
                    {showCategories ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon checked={false} />
                    )}
                  </div>
                </div>
                {showCategories && (
                  <div>
                    {allUnchecked && <p>Unselect All</p>}
                    {categories.map((category, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={category.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <label>{category.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Divider color="#E5E5E5" />
              <div className="sub-card">
                <div className="arrow-card">
                  <div className="i-card">
                    <h1 className="header-bottom-text">IDEAL FOR</h1>
                    <p>All</p>
                  </div>
                  <div onClick={toggleCategories}>
                    {showCategories ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon checked={false} />
                    )}
                  </div>
                </div>
                {showCategories && (
                  <div>
                    {allUnchecked && <p>Unselect All</p>}
                    {categories.map((category, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={category.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <label>{category.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Divider color="#E5E5E5" />
              <div className="sub-card">
                <div className="arrow-card">
                  <div className="i-card">
                    <h1 className="header-bottom-text">IDEAL FOR</h1>
                    <p>All</p>
                  </div>
                  <div onClick={toggleCategories}>
                    {showCategories ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon checked={false} />
                    )}
                  </div>
                </div>
                {showCategories && (
                  <div>
                    {allUnchecked && <p>Unselect All</p>}
                    {categories.map((category, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={category.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <label>{category.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Divider color="#E5E5E5" />
              <div className="sub-card">
                <div className="arrow-card">
                  <div className="i-card">
                    <h1 className="header-bottom-text">IDEAL FOR</h1>
                    <p>All</p>
                  </div>
                  <div onClick={toggleCategories}>
                    {showCategories ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon checked={false} />
                    )}
                  </div>
                </div>
                {showCategories && (
                  <div>
                    {allUnchecked && <p>Unselect All</p>}
                    {categories.map((category, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={category.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <label>{category.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Divider color="#E5E5E5" />
            </div>
          )}
          <div className="products-container">
            {data &&
              data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
      <div className="bottom-sec-main">
        <div className="bottom-sec">
          <div>
            <h1 style={{ color: "white", fontSize: "16px" }}>
              BE THE FIRST TO KNOW{" "}
            </h1>
            <p>Sign up for updates from metta muse </p>
            <div>
              {" "}
              <TextField
                sx={{ width: "300px", background: "white" }}
                size="small"
                placeholder="Enter you email ..."
              />
              <button className="button">SUBSCRIBE</button>
            </div>
          </div>
          <div>
            <h1 style={{ color: "white", fontSize: "16px" }}>CONTACT US</h1>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamouse.com</p>
            <h1 style={{ color: "white", fontSize: "16px" }}>CURRENCY</h1>
            <h1 style={{ color: "white", fontSize: "16px" }}>USD</h1>
            <p style={{ fontSize: "10px", paddingBottom: "20px" }}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <Divider color="#E5E5E5" className="divider" />
        <div className="bottom-sec">
          <div>
            <h1 style={{ color: "white", fontSize: "16px" }}>metta mouse</h1>
            <p>About US </p>
            <p>Stories </p>
            <p>Artisans </p>
            <p>Boutiques </p>
            <p>Contact Us </p>
            <p>EU Compliances Docs </p>
            <div> </div>
          </div>
          <div>
            <h1 style={{ color: "white", fontSize: "16px" }}>QUICK LINKS</h1>
            <p>Orders & Shipping </p>
            <p>Join/Login as Seller </p>
            <p>Payment & Pricing </p>
            <p>Returns & Refunds </p>
            <p>FAQS </p>
            <p>Privacy Policy </p>
            <p>Terms $ Conditions </p>
            <div> </div>
          </div>
          <div>
            <h1 style={{ color: "white", fontSize: "16px" }}>FOLLOW US </h1>
            <p>Follow US </p>
            <InstagramIcon />
            <LinkedInIcon />
            <p>metta muse ACCEPTS</p>
            <div className="img-card">
              <img
                src="https://i.ibb.co/wQ1nmBm/Group-136188.png"
                alt="Group-136188"
                border="0"
              />
              <img
                src="https://i.ibb.co/sQRR2Pc/Group-136190.png"
                alt="Group-136190"
                border="0"
              />
              <img
                src="https://i.ibb.co/Gkq7f2x/Group-136192.png"
                alt="Group-136192"
                border="0"
              />
              <img
                src="https://i.ibb.co/0J4Df1J/Group-136193.png"
                alt="Group-136193"
                border="0"
              />
              <img
                src="https://i.ibb.co/FqDXnQY/Group-136194.png"
                alt="Group-136194"
                border="0"
              />
              <img
                src="https://i.ibb.co/4wqV5vM/Group-136195.png"
                alt="Group-136195"
                border="0"
              />
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          Copyright ©️ 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default ProductShowcase;
