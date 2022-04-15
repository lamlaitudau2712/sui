// ** Icons Imports
import { Award } from 'react-feather';

// ** Custom Components
import Avatar from '@components/avatar';

// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap';

// ** Images
import decorationLeft from '@src/assets/images/elements/decore-left.png';
import decorationRight from '@src/assets/images/elements/decore-right.png';

const CardCongratulations = () => {
    return (
        <Card className="card-congratulations">
            <CardBody className="text-center">
                <img
                    className="congratulations-img-left"
                    src={decorationLeft.src}
                    alt="decor-left"
                />
                <img
                    className="congratulations-img-right"
                    src={decorationRight.src}
                    alt="decor-right"
                />
                <Avatar
                    icon={<Award size={28} />}
                    className="shadow"
                    color="primary"
                    size="xl"
                />
                <div className="text-center">
                    <h1 className="mb-1 text-white">Sui Coupon Tracker</h1>
                    <CardText className="m-auto w-75">
                        More than <strong>20.6%</strong> of users claimed their
                        coupons.
                    </CardText>
                </div>
            </CardBody>
        </Card>
    );
};

export default CardCongratulations;