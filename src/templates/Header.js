const Header = () => {
	const view = `
        <div class="header__container">
            <div class="header__container--logo">
                <h1>
                    <a href="/" class="header--link">
                        100tifi.co
                    </a>
                </h1>
            </div>
            <div class="header__container--nav">
                <a href="#/about/" class="header--link">
                    About
                </a>
            </div>
        </div>
    `;
	return view;
};

export default Header;
