const Header = () => {
	const view = `
        <div class="header-main">
            <div class="header-logo">
                <h1>
                    <a href="/">
                        <img src="https://i.imgur.com/7utDxm8.png"
                             alt="Rick and Morty logo"
                             height="50px" />
                    </a>
                </h1>
            </div>
            <div class="header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
	return view;
};

export default Header;
