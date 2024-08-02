import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { fCurrency } from 'src/utils/format-number';
import Label from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {
  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      src={product.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderActions = (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
      className="action-buttons"
    >
      <Button variant="contained" size="small" color="info">
        View
      </Button>
      <Button variant="contained" size="small" color="primary">
        Post
      </Button>
    </Stack>
  );

  return (
    <Card
      sx={{
        position: 'relative',
        '&:hover .action-buttons': {
          opacity: 1,
        },
      }}
    >
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {renderImg}
        {renderActions}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {/* {product.name} */}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
        </Stack>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
