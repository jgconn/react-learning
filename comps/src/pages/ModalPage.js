import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {/* if showModal is true then display <Modal /> else don't show */}
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum condimentum scelerisque. Donec at velit ut mauris fermentum interdum. Nulla consequat scelerisque hendrerit. Aenean et pharetra tortor. Duis orci lorem, elementum a tristique eleifend, aliquam tristique diam. Vestibulum ornare risus id leo facilisis, et iaculis ante cursus. Vivamus blandit volutpat est, eu congue nibh luctus a. Morbi sit amet ante sit amet magna consectetur iaculis. Ut non mollis eros. Nam sed ante eu purus tempus luctus quis sit amet justo. In facilisis quis orci at venenatis. Aliquam id tortor sit amet dui malesuada suscipit. Maecenas accumsan libero ut dui porttitor convallis. Nullam auctor condimentum pharetra. Phasellus placerat faucibus ornare. Integer maximus dictum odio vitae convallis.
            </p>
        </div>
    );
};

export default ModalPage;