export const componentsData = [
    {
        id: "accordion",
        label: "Accordion",
        description: "A vertically stacked set of interactive headings that each reveal a section of content.",
        demo: (
            <div className="accordion w-full" data-ui-accordion-type="single">
                <div className="accordion-item" style={{ borderTop: 'none' }}>
                    <button className="accordion-trigger font-medium py-4 text-[15px] hover:underline" data-ui-toggle="accordion" aria-expanded="true">
                        What are your shipping options?
                        <svg className="accordion-icon w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className="accordion-content text-[15px] text-[var(--text-muted)] pb-4 leading-relaxed open">
                        We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.
                    </div>
                </div>
                <div className="accordion-item border-b border-[var(--border-color)]">
                    <button className="accordion-trigger font-medium py-4 text-[15px] hover:underline" data-ui-toggle="accordion" aria-expanded="false">
                        What is your return policy?
                        <svg className="accordion-icon w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className="accordion-content text-[15px] text-[var(--text-muted)] pb-4 leading-relaxed">
                        If you're unhappy with your purchase, we'll find a solution for you. Most items can be returned or exchanged within 30 days.
                    </div>
                </div>
                <div className="accordion-item border-b border-[var(--border-color)]">
                    <button className="accordion-trigger font-medium py-4 text-[15px] hover:underline" data-ui-toggle="accordion" aria-expanded="false">
                        How can I contact customer support?
                        <svg className="accordion-icon w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className="accordion-content text-[15px] text-[var(--text-muted)] pb-4 leading-relaxed">
                        You can reach us through our contact page, via email at support@shadui.com, or call us directly during business hours.
                    </div>
                </div>
            </div>
        ),
        code: `<div class="accordion" data-ui-accordion-type="single">
  <div class="accordion-item">
    <button class="accordion-trigger" data-ui-toggle="accordion" aria-expanded="false">
      What are your shipping options?
      <svg class="accordion-icon" viewBox="0 0 24 24"><!-- Chevron --></svg>
    </button>
    <div class="accordion-content">
      We offer standard (5-7 days)...
    </div>
  </div>
</div>`
    },
    {
        id: "alert",
        label: "Alert",
        description: "Displays a callout for user attention.",
        demo: (
            <div className="flex flex-col gap-4 w-full">
                <div className="alert">
                    <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h5 className="alert-title">Payment successful</h5>
                    <div className="alert-desc">Your payment of $29.99 has been processed. A receipt has been sent to your email address.</div>
                </div>
                <div className="alert">
                    <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <h5 className="alert-title">New feature available</h5>
                    <div className="alert-desc">We've added dark mode support. You can enable it in your account settings.</div>
                </div>
                <div className="alert alert-destructive">
                    <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h5 className="alert-title">Payment failed</h5>
                    <div className="alert-desc">Your payment could not be processed. Please check your payment method and try again.</div>
                </div>
            </div>
        ),
        code: `<div class="alert">
  <svg class="alert-icon" viewBox="0 0 24 24"><!-- Icon --></svg>
  <h5 class="alert-title">Payment successful</h5>
  <div class="alert-desc">Your payment has been processed.</div>
</div>

<div class="alert alert-destructive">
  <svg class="alert-icon" viewBox="0 0 24 24"><!-- Icon --></svg>
  <h5 class="alert-title">Payment failed</h5>
  <div class="alert-desc">Your payment could not be processed.</div>
</div>`
    },
    {
        id: "alert-dialog",
        label: "Alert Dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
        demo: (
            <div className="flex gap-4">
                <button className="btn btn-outline" data-ui-toggle="modal" data-ui-target="#alert-standard">
                    Show Alert Dialog
                </button>
                <div className="modal-overlay" id="alert-standard">
                    <div className="alert-dialog shadow-lg">
                        <div className="alert-dialog-header">
                            <h2 className="alert-dialog-title">Are you absolutely sure?</h2>
                            <p className="alert-dialog-desc">This action cannot be undone. This will permanently delete your account from our servers.</p>
                        </div>
                        <div className="alert-dialog-footer">
                            <button className="btn btn-outline" data-ui-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" data-ui-dismiss="modal">Continue</button>
                        </div>
                    </div>
                </div>

                <button className="btn btn-destructive" data-ui-toggle="modal" data-ui-target="#alert-destructive">
                    Delete Chat
                </button>
                <div className="modal-overlay" id="alert-destructive">
                    <div className="alert-dialog shadow-lg">
                        <div className="alert-dialog-header center">
                            <div className="alert-dialog-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </div>
                            <h2 className="alert-dialog-title">Delete chat?</h2>
                            <p className="alert-dialog-desc">This will permanently delete this chat conversation. View <span style={{ textDecoration: 'underline' }}>Settings</span> delete any memories saved during this chat.</p>
                        </div>
                        <div className="alert-dialog-footer center">
                            <button className="btn btn-outline" data-ui-dismiss="modal">Cancel</button>
                            <button className="btn btn-destructive" data-ui-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        ),
        code: `<!-- Standard Alert Dialog -->
<button data-ui-toggle="modal" data-ui-target="#alert-standard">Open</button>

<div class="modal-overlay" id="alert-standard">
  <div class="alert-dialog">
    <div class="alert-dialog-header">
      <h2 class="alert-dialog-title">Are you sure?</h2>
      <p class="alert-dialog-desc">This action cannot be undone.</p>
    </div>
    <div class="alert-dialog-footer">
      <button class="btn btn-outline" data-ui-dismiss="modal">Cancel</button>
      <button class="btn btn-primary" data-ui-dismiss="modal">Continue</button>
    </div>
  </div>
</div>`
    },
    {
        id: "avatar",
        label: "Avatar",
        description: "An image element with a fallback for representing the user.",
        demo: (
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--border-color)] overflow-hidden flex items-center justify-center">
                    <img src="https://github.com/shadcn.png" alt="@shadcn" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--muted)] flex items-center justify-center font-medium shadow-sm border border-[var(--border-color)] text-sm">
                    CN
                </div>
            </div>
        ),
        code: `<!-- With Image -->
<div class="avatar">
  <img src="avatar.png" alt="@user" />
</div>

<!-- Fallback -->
<div class="avatar-fallback">CN</div>`
    },
    {
        id: "badge",
        label: "Badge",
        description: "Displays a badge or a component that looks like a badge.",
        demo: (
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <span className="badge badge-default">Default</span>
                <span className="badge badge-secondary">Secondary</span>
                <span className="badge badge-outline">Outline</span>
                <span className="badge badge-destructive">Destructive</span>
            </div>
        ),
        code: `<span class="badge badge-default">Default</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-outline">Outline</span>
<span class="badge badge-destructive">Destructive</span>`
    },
    {
        id: "breadcrumb",
        label: "Breadcrumb",
        description: "Displays the path to the current resource using a hierarchy of links.",
        demo: (
            <nav aria-label="breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                    <li><a href="#" className="hover:text-[var(--text-color)]">Home</a></li>
                    <li>/</li>
                    <li><a href="#" className="hover:text-[var(--text-color)]">Components</a></li>
                    <li>/</li>
                    <li className="text-[var(--text-color)] font-medium" aria-current="page">Breadcrumb</li>
                </ol>
            </nav>
        ),
        code: `<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-separator">/</li>
    <li class="breadcrumb-item active">Breadcrumb</li>
  </ol>
</nav>`
    },
    {
        id: "button",
        label: "Button",
        description: "Displays a button or a component that looks like it.",
        demo: (
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-outline">Outline</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-destructive">Destructive</button>
            </div>
        ),
        code: `<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-destructive">Destructive</button>`
    },
    {
        id: "card",
        label: "Card",
        description: "Displays a card with header, content, and footer.",
        demo: (
            <div className="card w-full max-w-sm shadow-md border-[var(--border-color)] mb-0">
                <div className="card-header pb-2">
                    <h3 className="card-title">Create project</h3>
                    <p className="card-description">Deploy your new project in one-click.</p>
                </div>
                <div className="card-content py-4">
                    <div className="form-group mb-4">
                        <label className="label text-sm">Name</label>
                        <input type="text" className="input text-sm" placeholder="Next.js" />
                    </div>
                </div>
                <div className="card-footer border-t border-[var(--border-color)] mt-auto pt-4 flex justify-between">
                    <button className="btn btn-outline text-sm">Cancel</button>
                    <button className="btn btn-primary text-sm">Deploy</button>
                </div>
            </div>
        ),
        code: `<div class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
    <p class="card-description">Description</p>
  </div>
  <div class="card-content">...</div>
  <div class="card-footer">...</div>
</div>`
    },
    {
        id: "checkbox",
        label: "Checkbox",
        description: "A control that allows the user to toggle between checked and not checked.",
        demo: (
            <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" id="terms_demo" />
                <label htmlFor="terms_demo" className="text-sm font-medium leading-none">Accept terms and conditions</label>
            </div>
        ),
        code: `<div class="flex items-center gap-3">
  <input type="checkbox" class="checkbox" id="terms" />
  <label for="terms">Accept terms</label>
</div>`
    },
    {
        id: "dialog",
        label: "Dialog (Modal)",
        description: "A window overlaid on either the primary window or another dialog window.",
        demo: (
            <>
                <button className="btn btn-outline" data-ui-toggle="modal" data-ui-target="#demo-modal">
                    Open Modal
                </button>
                <div className="modal-overlay" id="demo-modal">
                    <div className="modal-content shadow-lg border-[var(--border-color)] rounded-lg">
                        <h2 className="modal-title font-semibold text-lg">Edit Profile</h2>
                        <p className="modal-desc text-sm text-[var(--text-muted)]">Make changes to your profile here. Click save when you're done.</p>
                        <div className="grid gap-4 py-4 mt-2">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm">Name</label>
                                <input className="input col-span-3 text-sm" defaultValue="Pedro Duarte" />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-[var(--border-color)]">
                            <button className="btn btn-ghost text-sm" data-ui-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary text-sm" data-ui-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </>
        ),
        code: `<!-- Trigger -->
<button data-ui-toggle="modal" data-ui-target="#my-modal">
  Open Dialog
</button>

<!-- Target Modal Overlay -->
<div class="modal-overlay" id="my-modal">
  <div class="modal-content">
    <h2 class="modal-title">Edit Profile</h2>
    <p class="modal-desc">Change your settings here.</p>
    <button data-ui-dismiss="modal">Close</button>
  </div>
</div>`
    },

    {
        id: "dropdown",
        label: "Dropdown Menu",
        description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
        demo: (
            <div className="relative dropdown">
                <button className="btn btn-outline" data-ui-toggle="dropdown">
                    Open
                </button>
                <div className="dropdown-menu absolute top-full left-0 mt-2 min-w-[14rem] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-md shadow-md p-1 z-50">
                    <div className="dropdown-label">My Account</div>
                    <div className="dropdown-item">
                        <span>Profile</span>
                        <span className="dropdown-shortcut">⇧⌘P</span>
                    </div>
                    <div className="dropdown-item">
                        <span>Billing</span>
                        <span className="dropdown-shortcut">⌘B</span>
                    </div>
                    <div className="dropdown-item">
                        <span>Settings</span>
                        <span className="dropdown-shortcut">⌘S</span>
                    </div>
                    <div className="dropdown-separator"></div>
                    <div className="dropdown-item">
                        <span>Team</span>
                    </div>
                    <div className="dropdown-item">
                        <span>Invite users</span>
                        <svg className="w-4 h-4 ml-auto opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div className="dropdown-item">
                        <span>New Team</span>
                        <span className="dropdown-shortcut">⌘+T</span>
                    </div>
                    <div className="dropdown-separator"></div>
                    <div className="dropdown-item">
                        <span>GitHub</span>
                    </div>
                    <div className="dropdown-item">
                        <span>Support</span>
                    </div>
                    <div className="dropdown-item disabled">
                        <span>API</span>
                    </div>
                    <div className="dropdown-separator"></div>
                    <div className="dropdown-item">
                        <span>Log out</span>
                        <span className="dropdown-shortcut">⇧⌘Q</span>
                    </div>
                </div>
            </div>
        ),
        code: `<div class="dropdown">
  <button data-ui-toggle="dropdown" class="btn">Open</button>
  <div class="dropdown-menu">
    <div class="dropdown-label">My Account</div>
    <div class="dropdown-item">
      <span>Profile</span>
      <span class="dropdown-shortcut">⇧⌘P</span>
    </div>
    <div class="dropdown-separator"></div>
    <div class="dropdown-item disabled">
      <span>API</span>
    </div>
  </div>
</div>`
    },
    {
        id: "field",
        label: "Field",
        description: "Combine labels, controls, and help text to compose accessible form fields and grouped inputs.",
        demo: (
            <div className="w-full max-w-[420px] flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <h3 className="text-[15px] font-semibold tracking-tight">Payment Method</h3>
                    <p className="text-[13px] text-[var(--text-muted)]">All transactions are secure and encrypted</p>
                </div>

                <div className="field">
                    <label className="label">Name on Card</label>
                    <input type="text" className="input text-sm" defaultValue="Evil Rabbit" />
                </div>

                <div className="field gap-1.5">
                    <label className="label">Card Number</label>
                    <input type="text" className="input text-sm" defaultValue="1234 5678 9012 3456" />
                    <p className="field-desc">Enter your 16-digit card number</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="field">
                        <label className="label">Month</label>
                        <div className="select-group" data-ui-toggle="select">
                            <button className="select-trigger bg-transparent"><span className="select-value">MM</span><svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg></button>
                            <div className="select-dropdown shadow-md bg-[var(--card-bg)]">
                                <div className="select-item" data-value="01">01</div><div className="select-item" data-value="02">02</div><div className="select-item" data-value="03">03</div>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Year</label>
                        <div className="select-group" data-ui-toggle="select">
                            <button className="select-trigger bg-transparent"><span className="select-value">YYYY</span><svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg></button>
                            <div className="select-dropdown shadow-md bg-[var(--card-bg)]">
                                <div className="select-item" data-value="2026">2026</div><div className="select-item" data-value="2027">2027</div>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">CVV</label>
                        <input type="text" className="input text-sm" defaultValue="123" />
                    </div>
                </div>

                <div className="h-px bg-[var(--border-color)] my-1"></div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-[15px] font-semibold tracking-tight">Billing Address</h3>
                    <p className="text-[13px] text-[var(--text-muted)]">The billing address associated with your payment method</p>
                </div>

                <div className="flex items-center gap-3">
                    <input type="checkbox" className="checkbox" id="shipping" defaultChecked />
                    <label htmlFor="shipping" className="text-sm font-medium leading-none">Same as shipping address</label>
                </div>

                <div className="field gap-1.5">
                    <label className="label">Comments</label>
                    <textarea className="textarea text-sm" placeholder="Add any additional comments"></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                    <button className="btn btn-primary text-sm h-9 px-4">Submit</button>
                    <button className="btn btn-outline text-sm h-9 bg-transparent px-4">Cancel</button>
                </div>
            </div>
        ),
        code: `<div class="field">
  <label class="label">Email address</label>
  <input type="email" class="input" placeholder="me@example.com" />
  <p class="field-desc">We will never share your email.</p>
</div>`
    },
    {
        id: "input",
        label: "Input",
        description: "Displays a form input field or a component that looks like an input field.",
        demo: (
            <div className="w-full max-w-sm">
                <label className="label mb-2 block text-sm">Email address</label>
                <input type="email" className="input text-sm" placeholder="name@example.com" />
            </div>
        ),
        code: `<label class="label">Email address</label>
<input type="email" class="input" placeholder="Email" />`
    },
    {
        id: "popover",
        label: "Popover",
        description: "Displays rich content in a portal, triggered by a button.",
        demo: (
            <div className="popover-group relative inline-block">
                <button className="btn btn-outline" data-ui-toggle="popover">Click Popover</button>
                <div className="popover absolute top-full mt-2 left-0 text-left p-4 w-64 shadow-lg border-[var(--border-color)] bg-[var(--card-bg)] rounded-md z-50">
                    <h4 className="font-medium mb-1 text-sm">Dimensions</h4>
                    <p className="text-xs text-[var(--text-muted)] mb-4">Set the dimensions for the layer.</p>
                    <input className="input w-full h-8 text-sm" defaultValue="100%" />
                </div>
            </div>
        ),
        code: `<div class="popover-group">
  <button data-ui-toggle="popover" class="btn">Popover</button>
  <div class="popover">
    <h4>Title</h4>
    <p>Details and rich elements.</p>
  </div>
</div>`
    },
    {
        id: "progress",
        label: "Progress",
        description: "Displays an indicator showing the completion progress of a task.",
        demo: (
            <div className="w-full max-w-xs h-3 bg-[var(--muted)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--text-color)] w-[60%] transition-all duration-500 ease-in-out"></div>
            </div>
        ),
        code: `<div class="progress-bar-container">
  <div class="progress-bar" style="width: 60%"></div>
</div>`
    },
    {
        id: "radio",
        label: "Radio Group",
        description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
        demo: (
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <input type="radio" className="radio" name="plan_demo" id="p_default" defaultChecked />
                    <label htmlFor="p_default" className="text-sm font-medium leading-none">Default</label>
                </div>
                <div className="flex items-center gap-3">
                    <input type="radio" className="radio" name="plan_demo" id="p_comfortable" />
                    <label htmlFor="p_comfortable" className="text-sm font-medium leading-none">Comfortable</label>
                </div>
            </div>
        ),
        code: `<input type="radio" class="radio" name="opt" id="o1" />
<label for="o1">Option 1</label>

<input type="radio" class="radio" name="opt" id="o2" />
<label for="o2">Option 2</label>`
    },
    {
        id: "select",
        label: "Select",
        description: "Displays a list of options for the user to pick from. Fully themed to match ShadCN.",
        demo: (
            <div className="w-full max-w-xs">
                <div className="select-group" data-ui-toggle="select">
                    <button className="select-trigger bg-[var(--bg-color)]" data-placeholder="true">
                        <span className="select-value text-sm font-normal">Select a timezone</span>
                        <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className="select-dropdown shadow-md bg-[var(--card-bg)]">
                        <div className="select-item" data-value="est">Eastern Standard Time (EST)</div>
                        <div className="select-item" data-value="cst">Central Standard Time (CST)</div>
                        <div className="select-item" data-value="mst">Mountain Standard Time (MST)</div>
                        <div className="select-item" data-value="pst">Pacific Standard Time (PST)</div>
                    </div>
                    <input type="hidden" name="timezone" />
                </div>
            </div>
        ),
        code: `<div class="select-group" data-ui-toggle="select">
  <button class="select-trigger" data-placeholder="true">
    <span class="select-value">Select Option</span>
    <svg><!-- Chevron Icon --></svg>
  </button>
  <div class="select-dropdown">
    <div class="select-item" data-value="opt1">Option 1</div>
    <div class="select-item" data-value="opt2">Option 2</div>
  </div>
  <!-- Optional: for form submission -->
  <input type="hidden" name="my_field" />
</div>`
    },
    {
        id: "skeleton",
        label: "Skeleton",
        description: "Use to show a placeholder while content is loading.",
        demo: (
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[var(--muted)] animate-pulse"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-[var(--muted)] animate-pulse rounded w-[200px]"></div>
                    <div className="h-4 bg-[var(--muted)] animate-pulse rounded w-[150px]"></div>
                </div>
            </div>
        ),
        code: `<div class="skeleton-circle animate-pulse"></div>
<div class="skeleton-bar animate-pulse w-48"></div>`
    },
    {
        id: "slider",
        label: "Slider",
        description: "An input where the user selects a value from within a given range.",
        demo: (
            <div className="w-full max-w-sm">
                <input type="range" className="w-full accent-[var(--text-color)]" min="0" max="100" defaultValue="50" />
            </div>
        ),
        code: `<!-- Uses native slider with accent color matching theme -->
<input type="range" min="0" max="100" value="50" />`
    },
    {
        id: "switch",
        label: "Switch",
        description: "A control that allows the user to toggle between checked and not checked.",
        demo: (
            <div className="flex items-center space-x-2">
                <button className="switch checked" role="switch" aria-checked="true">
                    <span className="switch-thumb"></span>
                </button>
                <label className="text-sm font-medium">Airplane Mode</label>
            </div>
        ),
        code: `<button class="switch checked" role="switch">
  <span class="switch-thumb"></span>
</button>
<label>Airplane Mode</label>`
    },
    {
        id: "table",
        label: "Table",
        description: "A responsive data table for displaying collections of data.",
        demo: (
            <div className="table-container w-full min-w-[500px]">
                <table className="table">
                    <caption>A list of your recent invoices.</caption>
                    <thead>
                        <tr>
                            <th className="w-[100px]">Invoice</th>
                            <th>Status</th>
                            <th>Method</th>
                            <th className="text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-medium">INV001</td>
                            <td>Paid</td>
                            <td>Credit Card</td>
                            <td className="text-right">$250.00</td>
                        </tr>
                        <tr>
                            <td className="font-medium">INV002</td>
                            <td>Pending</td>
                            <td>PayPal</td>
                            <td className="text-right">$150.00</td>
                        </tr>
                        <tr>
                            <td className="font-medium">INV003</td>
                            <td>Unpaid</td>
                            <td>Bank Transfer</td>
                            <td className="text-right">$350.00</td>
                        </tr>
                        <tr>
                            <td className="font-medium">INV004</td>
                            <td>Paid</td>
                            <td>Credit Card</td>
                            <td className="text-right">$450.00</td>
                        </tr>
                        <tr>
                            <td className="font-medium">INV005</td>
                            <td>Paid</td>
                            <td>PayPal</td>
                            <td className="text-right">$550.00</td>
                        </tr>
                        <tr>
                            <td className="font-medium">INV006</td>
                            <td>Pending</td>
                            <td>Bank Transfer</td>
                            <td className="text-right">$200.00</td>
                        </tr>
                        <tr>
                            <td className="font-medium">INV007</td>
                            <td>Unpaid</td>
                            <td>Credit Card</td>
                            <td className="text-right">$300.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Total</td>
                            <td className="text-right">$2,500.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        ),
        code: `<div class="table-container">
  <table class="table">
    <caption>A list of your recent invoices.</caption>
    <thead>
      <tr>
        <th>Invoice</th>
        <th>Status</th>
        <th>Method</th>
        <th class="text-right">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-medium">INV001</td>
        <td>Paid</td>
        <td>Credit Card</td>
        <td class="text-right">$250.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total</td>
        <td class="text-right">$2,500.00</td>
      </tr>
    </tfoot>
  </table>
</div>`
    },
    {
        id: "tabs",
        label: "Tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        demo: (
            <div className="tabs w-full max-w-sm">
                <div className="tabs-list w-full grid grid-cols-2 bg-[var(--muted)] p-1 rounded-md mb-4">
                    <button className="tabs-trigger active text-sm font-medium py-1.5" data-ui-toggle="tab" data-ui-target="#t1">Account</button>
                    <button className="tabs-trigger text-sm font-medium py-1.5" data-ui-toggle="tab" data-ui-target="#t2">Password</button>
                </div>
                <div className="tabs-content active border border-[var(--border-color)] rounded-lg p-4" id="t1">
                    <h4 className="font-semibold mb-1 text-sm">Account</h4>
                    <p className="text-xs text-[var(--text-muted)] mb-4">Make changes to your account here.</p>
                </div>
                <div className="tabs-content hidden border border-[var(--border-color)] rounded-lg p-4" id="t2">
                    <h4 className="font-semibold mb-1 text-sm">Password</h4>
                    <p className="text-xs text-[var(--text-muted)] mb-4">Change your password here.</p>
                </div>
            </div>
        ),
        code: `<div class="tabs">
  <div class="tabs-list">
    <button data-ui-toggle="tab" data-ui-target="#t1">Tab 1</button>
    <button data-ui-toggle="tab" data-ui-target="#t2">Tab 2</button>
  </div>
  
  <div class="tabs-content active" id="t1">...</div>
  <div class="tabs-content" id="t2">...</div>
</div>`
    },
    {
        id: "textarea",
        label: "Textarea",
        description: "Displays a form textarea or a component that looks like a textarea.",
        demo: (
            <div className="w-full max-w-sm">
                <label className="label mb-2 block text-sm">Your message</label>
                <textarea className="textarea text-sm" placeholder="Type your message here..."></textarea>
            </div>
        ),
        code: `<textarea class="textarea" placeholder="Type..."></textarea>`
    },
    {
        id: "toast",
        label: "Toast",
        description: "A succinct message that is displayed temporarily.",
        demo: (
            <button className="btn btn-primary" onClick={() => {
                if (typeof window !== "undefined" && (window as any).ShadUI) {
                    (window as any).ShadUI.toast({
                        title: "Action completed",
                        description: "Your file has been saved locally.",
                        variant: "default"
                    });
                }
            }}>
                Show Toast
            </button>
        ),
        code: `<button onclick="showToast()">Notify</button>

<script>
  function showToast() {
    ShadUI.toast({
      title: "Success",
      description: "Data has been synced.",
      variant: "default"
    });
  }
</script>
`
    },
    {
        id: "tooltip",
        label: "Tooltip",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        demo: (
            <div className="tooltip-group relative inline-block">
                <button className="btn btn-outline">Hover Me</button>
                <div className="tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[var(--text-color)] text-[var(--bg-color)] text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                    Add to library
                </div>
            </div>
        ),
        code: `<div class="tooltip-group">
  <button class="btn">Hover</button>
  <div class="tooltip">Tooltip Hint</div>
</div>`
    },
    {
        id: "typography",
        label: "Typography",
        description: "Styles for headings, paragraphs, lists...etc.",
        demo: (
            <div className="space-y-4 w-full">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">The Joke Tax Chronicles</h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.</p>
                <blockquote className="mt-6 border-l-2 pl-6 italic bg-transparent border-[var(--border-color)]">"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote>
            </div>
        ),
        code: `<h1 class="text-4xl font-extrabold tracking-tight">Heading 1</h1>
<h2 class="text-3xl font-semibold tracking-tight border-b pb-2">Heading 2</h2>
<p class="leading-7 mt-6">Paragraph text.</p>
<blockquote class="border-l-2 pl-6 italic">Quote</blockquote>`
    }
];
