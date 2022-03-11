import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CountertopsIcon from '@mui/icons-material/Countertops';
import { Collapse, List } from '@mui/material';
import { Link } from 'react-router-dom';

export const MainListItems = () => {
  const [category, setCategory] = useState(false);
  const [blog, setBlog] = useState(false);
  const [faq, setFaq] = useState(false);
  const [commerce, setCommerce] = useState(false);
  const [products, setProducts] = useState(false);
  const [payment, setPayment] = useState(false);
  const [settings, setSettings] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleCategory = () => {
    setCategory(!category);
  };
  const handleBlog = () => {
    setBlog(!blog);
  };
  const handleFaq = () => {
    setFaq(!faq);
  };
  const handleCommerce = () => {
    setCommerce(!commerce);
  };
  const handleProducts = () => {
    setProducts(!products);
  };
  const handlePayments = () => {
    setPayment(!payment);
  };
  const handleSettings = () => {
    setSettings(!settings);
  };
  const handleAdmin = () => {
    setAdmin(!admin);
  };

  return (
    <React.Fragment>
      <ListItemButton component={Link} to='/'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItemButton>
      <ListItemButton component={Link} to='form'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Form' />
      </ListItemButton>
      <ListItemButton onClick={handleCategory}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='All Category' />
        {category ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={category} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Main Category' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Sub Category' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Child Category' />
          </ListItemButton>
        </List>
      </Collapse>
      {/* DropDown */}
      <ListItemButton onClick={handleBlog}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Blogs' />
        {blog ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={blog} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Posts' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Categories' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Tags' />
          </ListItemButton>
        </List>
      </Collapse>
      {/* DropDown */}
      <ListItemButton onClick={handleFaq}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Faq' />
        {faq ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={faq} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='All' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Categories' />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton component={Link} to='brands'>
        <ListItemIcon>
          <CountertopsIcon />
        </ListItemIcon>
        <ListItemText primary='Ads' />
      </ListItemButton>
      <ListItemButton component={Link} to='brands'>
        <ListItemIcon>
          <CountertopsIcon />
        </ListItemIcon>
        <ListItemText primary='Testimonials' />
      </ListItemButton>
      {/* DropDown */}
      <ListItemButton onClick={handleCommerce}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Ecommerce' />
        {commerce ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={commerce} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Report' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Flash Sale' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Orders' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Incomplete Orders' />
          </ListItemButton>
          <ListItemButton onClick={handleProducts}>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary='Products' />
            {products ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={products} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Import' />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Export' />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Product Categories' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Product Attributes' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Brands' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Reviews' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Shipping' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Discount' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Coupons' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItemButton>
        </List>
      </Collapse>
      {/* DropDown */}
      <ListItemButton onClick={handlePayments}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Payment' />
        {payment ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={payment} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Transaction' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Payment Methods' />
          </ListItemButton>
        </List>
      </Collapse>
      {/* DropDown */}
      <ListItemButton onClick={handleSettings}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Settings' />
        {settings ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={settings} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Email' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='General' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Permalink' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Social Login' />
          </ListItemButton>
        </List>
      </Collapse>
      {/* DropDown */}
      <ListItemButton onClick={handleAdmin}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Administration' />
        {admin ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={admin} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Role &amp; permissions' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Users' />
          </ListItemButton>
          <ListItemButton component={Link} to='category' sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Activity Log' />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};
