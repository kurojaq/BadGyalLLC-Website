/**
 * Design System Showcase Page
 * Comprehensive component and pattern documentation
 */

export function loadDesignSystemPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 class="display-1">Design System</h1>
        <p class="body-lg" style="color: var(--color-text-secondary); margin-bottom: var(--space-8);">
          Complete visual language and component library for BadGyalLLC
        </p>

        <!-- Table of Contents -->
        <div class="card" style="background-color: var(--color-bg-secondary); margin-bottom: var(--space-8);">
          <h3 style="margin-bottom: var(--space-4);">Contents</h3>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4);">
            <a href="#colors" class="underline-on-hover">Color Palette</a>
            <a href="#typography" class="underline-on-hover">Typography</a>
            <a href="#buttons" class="underline-on-hover">Buttons</a>
            <a href="#forms" class="underline-on-hover">Forms</a>
            <a href="#cards" class="underline-on-hover">Cards</a>
            <a href="#spacing" class="underline-on-hover">Spacing</a>
          </div>
        </div>

        <!-- Color Palette -->
        <div id="colors" style="margin-bottom: var(--space-8);">
          <h2 class="heading-2">Color Palette</h2>

          <div style="margin-bottom: var(--space-6);">
            <h3 class="heading-4">Primary Colors</h3>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--space-3);">
              ${['900', '800', '700', '600', '500'].map(shade => `
                <div style="text-align: center;">
                  <div style="
                    background-color: var(--color-primary-${shade});
                    height: 120px;
                    border-radius: var(--radius-lg);
                    margin-bottom: var(--space-2);
                    box-shadow: var(--shadow-sm);
                  "></div>
                  <code style="font-size: var(--text-xs);">-${shade}</code>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="margin-bottom: var(--space-6);">
            <h3 class="heading-4">Accent Colors (Gold)</h3>
            <div style="display: grid; grid-template-columns: repeat(9, 1fr); gap: var(--space-3);">
              ${['900', '800', '700', '600', '500', '400', '300', '200', '100'].map(shade => `
                <div style="text-align: center;">
                  <div style="
                    background-color: var(--color-accent-${shade});
                    height: 100px;
                    border-radius: var(--radius-lg);
                    margin-bottom: var(--space-2);
                    box-shadow: var(--shadow-sm);
                    border: 1px solid var(--color-border-light);
                  "></div>
                  <code style="font-size: var(--text-xs);">-${shade}</code>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h3 class="heading-4">Semantic Colors</h3>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4);">
              <div class="card">
                <div style="
                  background-color: var(--color-success);
                  height: 100px;
                  border-radius: var(--radius-md);
                  margin-bottom: var(--space-3);
                "></div>
                <strong>Success</strong>
                <p style="color: var(--color-text-secondary); font-size: var(--text-sm);">#10b981</p>
              </div>
              <div class="card">
                <div style="
                  background-color: var(--color-warning);
                  height: 100px;
                  border-radius: var(--radius-md);
                  margin-bottom: var(--space-3);
                "></div>
                <strong>Warning</strong>
                <p style="color: var(--color-text-secondary); font-size: var(--text-sm);">#f59e0b</p>
              </div>
              <div class="card">
                <div style="
                  background-color: var(--color-error);
                  height: 100px;
                  border-radius: var(--radius-md);
                  margin-bottom: var(--space-3);
                "></div>
                <strong>Error</strong>
                <p style="color: var(--color-text-secondary); font-size: var(--text-sm);">#ef4444</p>
              </div>
              <div class="card">
                <div style="
                  background-color: var(--color-info);
                  height: 100px;
                  border-radius: var(--radius-md);
                  margin-bottom: var(--space-3);
                "></div>
                <strong>Info</strong>
                <p style="color: var(--color-text-secondary); font-size: var(--text-sm);">#3b82f6</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div id="typography" style="margin-bottom: var(--space-8);">
          <h2 class="heading-2">Typography</h2>

          <div style="margin-bottom: var(--space-6);">
            <h3 class="heading-4">Display Styles</h3>
            <div class="card">
              <div class="display-1">Display 1 - 72px / Bold</div>
              <div class="display-2">Display 2 - 60px / Bold</div>
            </div>
          </div>

          <div style="margin-bottom: var(--space-6);">
            <h3 class="heading-4">Heading Styles</h3>
            <div class="card">
              <div class="heading-1">Heading 1 - 48px / Bold</div>
              <div class="heading-2">Heading 2 - 36px / Bold</div>
              <div class="heading-3">Heading 3 - 30px / Bold</div>
              <div class="heading-4">Heading 4 - 24px / Semibold</div>
              <div class="heading-5">Heading 5 - 20px / Semibold</div>
              <div class="heading-6">Heading 6 - 18px / Semibold</div>
            </div>
          </div>

          <div style="margin-bottom: var(--space-6);">
            <h3 class="heading-4">Body Text</h3>
            <div class="card">
              <p class="body-lg"><strong>Large (18px):</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="body-base"><strong>Base (16px):</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="body-sm"><strong>Small (14px):</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="body-xs"><strong>Extra Small (12px):</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div>
            <h3 class="heading-4">Text Utilities</h3>
            <div class="card">
              <p class="text-bold">Bold text</p>
              <p class="text-semibold">Semibold text</p>
              <p class="text-medium">Medium text</p>
              <p class="italic">Italic text</p>
              <p class="uppercase">uppercase text</p>
              <p class="text-secondary">Secondary text color</p>
              <p class="text-tertiary">Tertiary text color</p>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div id="buttons" style="margin-bottom: var(--space-8);">
          <h2 class="heading-2">Buttons</h2>

          <div style="margin-bottom: var(--space-6);">
            <h3 class="heading-4">Primary Buttons</h3>
            <div class="card" style="display: flex; gap: var(--space-3); flex-wrap: wrap; align-items: center;">
              <button class="btn btn-primary">Primary</button>
              <button class="btn btn-primary btn-lg">Primary Large</button>
              <button class="btn btn-primary btn-sm">Small</button>
              <button class="btn btn-primary" disabled>Disabled</button>
            </div>
          </div>

          <div style="margin-bottom: var(--space-6);">
            <h3 class="heading-4">Secondary Buttons</h3>
            <div class="card" style="display: flex; gap: var(--space-3); flex-wrap: wrap; align-items: center;">
              <button class="btn btn-secondary">Secondary</button>
              <button class="btn btn-secondary btn-lg">Secondary Large</button>
              <button class="btn btn-secondary btn-sm">Small</button>
              <button class="btn btn-secondary" disabled>Disabled</button>
            </div>
          </div>

          <div>
            <h3 class="heading-4">Accent Buttons</h3>
            <div class="card" style="display: flex; gap: var(--space-3); flex-wrap: wrap; align-items: center;">
              <button class="btn btn-accent">Accent</button>
              <button class="btn btn-accent btn-lg">Accent Large</button>
              <button class="btn btn-accent btn-sm">Small</button>
              <button class="btn btn-accent" disabled>Disabled</button>
            </div>
          </div>
        </div>

        <!-- Forms -->
        <div id="forms" style="margin-bottom: var(--space-8);">
          <h2 class="heading-2">Form Elements</h2>

          <div class="card">
            <div class="form-group">
              <label class="form-label">Text Input</label>
              <input type="text" class="form-control" placeholder="Enter text">
            </div>

            <div class="form-group">
              <label class="form-label">Select Dropdown</label>
              <select class="form-control">
                <option>Choose an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Textarea</label>
              <textarea class="form-control" placeholder="Enter your message"></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">
                <input type="checkbox"> Checkbox option
              </label>
            </div>

            <div class="form-group">
              <label class="form-label">
                <input type="radio" name="radio"> Radio option 1
              </label>
              <label class="form-label">
                <input type="radio" name="radio"> Radio option 2
              </label>
            </div>

            <div class="form-group">
              <label class="form-label">Range</label>
              <input type="range" class="form-control">
            </div>
          </div>
        </div>

        <!-- Cards -->
        <div id="cards" style="margin-bottom: var(--space-8);">
          <h2 class="heading-2">Cards & Containers</h2>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4);">
            <div class="card">
              <h4>Basic Card</h4>
              <p style="color: var(--color-text-secondary);">Standard card with shadow and hover effect</p>
            </div>

            <div class="card" style="background-color: var(--color-accent-100); border-color: var(--color-accent-600);">
              <h4 style="color: var(--color-accent-900);">Accent Card</h4>
              <p style="color: var(--color-accent-700);">Highlighted card variant</p>
            </div>

            <div class="card" style="background-color: var(--color-bg-secondary);">
              <h4>Subtle Card</h4>
              <p style="color: var(--color-text-secondary);">Low-contrast card variant</p>
            </div>
          </div>
        </div>

        <!-- Spacing Scale -->
        <div id="spacing" style="margin-bottom: var(--space-8);">
          <h2 class="heading-2">Spacing Scale</h2>

          <div class="card">
            <h3 class="heading-4" style="margin-bottom: var(--space-4);">Padding Examples</h3>
            ${['1', '2', '3', '4', '5', '6'].map(level => `
              <div style="
                background-color: var(--color-accent-100);
                padding: var(--space-${level});
                margin-bottom: var(--space-3);
                border-radius: var(--radius-md);
              ">
                <code>--space-${level}</code> (${['4px', '8px', '12px', '16px', '24px', '32px'][level - 1]})
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Alerts -->
        <div style="margin-bottom: var(--space-8);">
          <h2 class="heading-2">Alerts & Feedback</h2>

          <div class="alert alert-success">
            <span>✓</span>
            <span><strong>Success:</strong> Action completed successfully</span>
          </div>

          <div class="alert alert-warning">
            <span>⚠</span>
            <span><strong>Warning:</strong> Please review this information</span>
          </div>

          <div class="alert alert-error">
            <span>✕</span>
            <span><strong>Error:</strong> Something went wrong</span>
          </div>

          <div class="alert alert-info">
            <span>ℹ</span>
            <span><strong>Info:</strong> Additional information for your reference</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
