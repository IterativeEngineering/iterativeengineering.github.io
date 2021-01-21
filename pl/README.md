Requirements:
  - Ruby version 2.5.0 or higher, including all development headers (check your Ruby version using ruby -v)
  - RubyGems (check your Gems version using gem -v)
  - GCC and Make (check versions using gcc -v,g++ -v, and make -v)
  
  - Bundler is a gem that installs all gems in your Gemfile. (gem install bundler)
    To install gems in your Gemfile using Bundler, run the following in the directory that has the Gemfile:
    - bundle install

Configuration file: _config.yml

Folder structure:
  - _data - content in YAML, JSON or CSV
  - _i18n - content translations
  - _includes - commonly used template components
  - _layouts - templates that wrap around content
  - _site - This is where the generated site will be placed (by default)


Scripts:
  - jekyll build or jekyll b - Performs a one off build your site to ./_site (by default).

  - bundle exec jekyll serve --livereload - Serve website with live reload (http://localhost:4000)