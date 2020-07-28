(function (doc) {
    var body = doc.body;
    var style = doc.createElement('style');
    style.innerHTML = '@media (prefers-color-scheme:dark){.bg-gray-light{background-color:#24292e!important}.text-gray{color:#c7d2de!important}a{color:#6aaaf3}.UnderlineNav-octicon{color:#d8e2ec}.UnderlineNav-item{color:#d8e2ec}.Counter{color:#d8e2ec;background-color:rgb(124 127 132 / 50%)}.btn{color:#d8e2ec;background-color:#24292e;box-shadow:0 1px 0 rgb(181 203 224 / 4%),inset 0 1px 0 hsl(0deg 0% 77% / 25%)}.social-count{color:#d8e2ec;background-color:#24292e}body{color:#d8e2ec;background-color:#1f2327}.signup-prompt-bg{background-image:linear-gradient(180deg,hsl(0deg 0 0 / 0) 50%,#000),linear-gradient(70deg,#1f2123 32%,#2e312f)}.link-gray{color:#7f8b98!important}.btn.hover,.btn:hover,[open]>.btn{background-color:#373738}.topic-tag{background-color:#44474a}.delete-topic-button,.topic-tag,.topic-tag-action{color:#6aaaf3}.Box-header--blue{background-color:#323435;border-color:#3d4650}.team-mention,.user-mention{color:#acc3da}.link-gray-dark{color:#24292e!important}.Box-row--focus-gray.navigation-focus{background-color:#404242}.Box-row{border-top:1px solid #343435}.link-gray-dark{color:#9ab4ce!important}.Box{background-color:#2c2e2f;border:1px solid #45474a;border-radius:6px}.bg-white{background-color:#1f2327!important}.markdown-body h1,.markdown-body h2{border-bottom:1px solid #646669}.link-gray:hover{color:#6aaaf3!important}.BorderGrid-cell{border:1px solid #676869}.muted-link{color:#8894a2!important}.Progress{background-color:#323940}.text-gray-dark{color:#a5bbd2!important}.markdown-body .highlight pre,.markdown-body pre{background-color:#363738}.pl-pds,.pl-s,.pl-s .pl-pse .pl-s1,.pl-sr,.pl-sr .pl-cce,.pl-sr .pl-sra,.pl-sr .pl-sre{color:#2c7bd8}.border-gray-light{border-color:#545658!important}.Box-body{border-bottom:1px solid #424346}.social-count:hover{color:#6aaaf3}.link-gray-dark:hover,.link-hover-blue:hover{color:#6aaaf3!important}.hx_avatar_stack_commit .AvatarStack-body{background-color:transparent}.UnderlineNav{box-shadow:inset 0 -1px 0 #484a4c}.UnderlineNav-item:focus,.UnderlineNav-item:hover{border-bottom-color:#484a4c}@media (min-width:1012px){.border-lg-top{border-top:1px solid #676869!important}}.topic-tag-link:hover{background-color:#626b73}.form-control,.form-select{color:#d8e2ec;background-color:#1f2327;border:1px solid #45474a;box-shadow:inset 0 1px 0 rgba(56,57,58,.2)}.border-bottom{border-bottom:1px solid #424346!important}.border-top{border-top:1px solid #424346!important}.dropdown-menu{background-color:#2c2e2f;border:1px solid #424346;box-shadow:0 8px 24px rgb(50 53 56 / 20%)}.dropdown-menu:after{border-bottom-color:#2c2e2f}.dropdown-item{color:#c7d2de}.dropdown-item:focus,.dropdown-item:hover{background-color:#054690}.header-nav-current-user .user-profile-link{color:#c7d2de}.dropdown-divider{border-top:1px solid #424346}.border{border:1px solid #424346!important}.bg-gray{background-color:#1f2327!important}.form-group .form-control{background-color:#1f2327}.border-right{border-right:1px solid #424346!important}.ajax-pagination-form .ajax-pagination-btn{color:#6aaaf3;background:#2c2e2f;border:1px solid #424346}.ajax-pagination-form .ajax-pagination-btn:focus,.ajax-pagination-form .ajax-pagination-btn:hover{color:#6aaaf3;background-color:#373738}.btn-primary{background-color:#27713c}.subnav-item{color:#d8e2ec;border:1px solid #424346}.Box-header{background-color:#323435;border:1px solid #3d4650}.table-list-header-toggle .btn-link.selected,.table-list-header-toggle .btn-link.selected:hover{color:#d8e2ec}.table-list-header-toggle .btn-link{color:#bac1c7}.table-list-header-toggle .btn-link:hover{color:#d8e2ec}@media (min-width:544px){.SelectMenu-modal{border:1px solid #424346;box-shadow:0 8px 24px rgb(54 58 62 / 20%)}}.SelectMenu-modal{background-color:#323435}.SelectMenu-item{background-color:#2c2e2f;border-bottom:1px solid #424346;color:#d8e2ec}.SelectMenu-header{border-bottom:1px solid #424346}@media (hover:hover){.SelectMenu-item:hover,body:not(.intent-mouse) .SelectMenu-item:focus{background-color:#404242}}.subnav-item:focus,.subnav-item:hover{background-color:#404242}.input-contrast:focus{background-color:#323435}kbd{color:#d8e2e0;background-color:#323435;border:1px solid #424346;box-shadow:inset 0 -1px 0 #46484a}.MarketplaceBackground-buffer{background:#1f2327}.box-shadow-extra-large{box-shadow:0 12px 48px rgba(56,57,58,.3)!important}.filter-item:hover{background-color:#3f4448}.muted-link:hover{color:#c8e1ff!important}.profile-timeline-card-wrapper{border-top:2px solid #1f2327;border-bottom:2px solid #1f2327}.discussion-item-icon{color:#d8e2ec;background-color:#2c2e2f;border:2px solid #424346}.profile-timeline.discussion-timeline:before{background-color:#424346}.profile-rollup-wrapper+.profile-rollup-wrapper{border-top:1px solid #424346}.profile-timeline.discussion-timeline .profile-timeline-month-heading:after{background-color:#424346}.SelectMenu-item[aria-checked=true]{color:#a2d0ff}.btn-primary.hover,.btn-primary:hover,[open]>.btn-primary{background-color:#165a2a}.CopyBlock:active,.CopyBlock:focus,.CopyBlock:hover{background-color:#2c2e2f}.SelectMenu-filter{border-bottom:1px solid #424346}.ellipsis-expander,.hidden-text-expander a{color:#d8e2ec;background:#24292e}.notifications-list-item:hover{background-color:#323435!important}.notifications-list-item .notification-list-item-link{color:#dce2ec!important}.notifications-list-item:hover .notification-list-item-link{color:#bcd5ff!important}.btn.selected,.btn:active,.btn[aria-selected=true]{background-color:#424648;box-shadow:inset 0 1px 0 rgb(31 35 39)}.btn-outline.disabled,.btn-outline:disabled,.btn-outline[aria-disabled=true]{color:rgba(3,102,214,.5);background-color:#24292e;border-color:rgb(66 67 70 / .15);box-shadow:0 1px 0 rgba(27,31,35,.04),inset 0 1px 0 hsl(0deg 0% 0% / 25%)}.form-control[disabled],.form-select[disabled]{background-color:#323435}.text-gray-light{color:#93a4b7!important}.flash{color:#afcae4;background-color:#273a4e;border-color:rgba(4,66,137,.2)}.form-group .form-control:focus{background-color:#323435}.Box-row--hover-gray:hover{background-color:#323435}.TimelineItem--condensed .TimelineItem-badge{background-color:#404242;border-radius:32px}.TimelineItem:before{background-color:#424346}.signed-commit-badge-large,.signed-commit-badge-medium,.signed-commit-badge-small{border:1px solid #6b6c71}.markdown-body img{background-color:transparent}.blob-code-inner{color:#dce6f1}.breadcrumb strong.final-path{color:#d8e2ec}.markdown-body table tr{background-color:#2f3031}.orghead{background-color:#24292e}.Label--gray,.Label--outline{border-color:#768084}.select-menu-filters,.select-menu-header{background-color:#323435;border-bottom:1px solid #424346}.select-menu-modal{color:#d8e2ec;background-color:#323435;border:1px solid #424346;box-shadow:0 8px 24px rgb(54 58 62 / 20%)}.select-menu-divider,.select-menu-header .select-menu-title{color:#d8e2ec}.select-menu-item{background-color:#2c2e2f;border-bottom:1px solid #424346}.select-menu-item.selected,details-menu .select-menu-item[aria-checked=true],details-menu .select-menu-item[aria-selected=true]{color:#68b4ff}.select-menu-item.navigation-focus,.select-menu-item.navigation-focus .description-inline,.select-menu-item.navigation-focus.select-menu-action,.select-menu-item.navigation-focus.selected,.select-menu-item.navigation-focus[aria-checked=true],.select-menu-item:focus,.select-menu-item:focus .description-inline,.select-menu-item:focus.select-menu-action,.select-menu-item:focus.selected,.select-menu-item:hover,.select-menu-item:hover .description-inline,.select-menu-item:hover.select-menu-action,.select-menu-item:hover.selected,.select-menu-item[aria-checked=true]:focus,.select-menu-item[aria-checked=true]:hover,.select-menu-item[aria-selected=true] .description-inline,.select-menu-item[aria-selected=true].select-menu-action,.select-menu-item[aria-selected=true]:focus,.select-menu-item[aria-selected=true]:hover{background-color:#054690}.menu{background-color:#2c2e2f;border:1px solid #45474a}.menu-heading{color:#d8e2ec;border-bottom:1px solid #45474a}.menu-item{color:#c6d1dc}.table-list{border-bottom:1px solid #424346}.menu-item:focus,.menu-item:hover{background-color:#34393c}.Header{color:hsl(0deg 0% 0% / 70%)}.header-search-current .header-search-wrapper.focus{background-color:hsl(0deg 0% 0% / 18%)}.header-search-current .jump-to-field-active{color:#d8e2ec!important;background-color:#373a3e}.header-search-current .jump-to-suggestions-results-container .navigation-item{border-bottom:1px solid #424346}.header-search-current .jump-to-suggestions-path{color:#d8e2ec}.header-search-current .jump-to-suggestions-results-container .navigation-focus .jump-to-suggestions-path,.header-search-current .jump-to-suggestions-results-container [aria-selected=true] .jump-to-suggestions-path{background:#054690}.rule,hr{border-bottom:1px solid #424346}}';
    body.appendChild(style);
})(document);