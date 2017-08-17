{"filter":false,"title":"development.rb","tooltip":"/config/environments/development.rb","undoManager":{"mark":6,"position":6,"stack":[[{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"insert","lines":["#"],"id":2}],[{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"insert","lines":[" "],"id":3}],[{"start":{"row":35,"column":28},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"remove","lines":["  "],"id":5}],[{"start":{"row":1,"column":0},"end":{"row":37,"column":3},"action":"remove","lines":["  # Settings specified here will take precedence over those in config/application.rb","","  # In the development environment your application's code is reloaded on","  # every request. This slows down response time but is perfect for development","  # since you don't have to restart the web server when you make code changes.","  config.cache_classes = false","","  # Log error messages when you accidentally call methods on nil.","  config.whiny_nils = true","","  # Show full error reports and disable caching","  config.consider_all_requests_local       = true","  config.action_controller.perform_caching = false","","  # Don't care if the mailer can't send","  config.action_mailer.raise_delivery_errors = false","","  # Print deprecation notices to the Rails logger","  config.active_support.deprecation = :log","","  # Only use best-standards-support built into browsers","  config.action_dispatch.best_standards_support = :builtin","","  # Raise exception on mass assignment protection for Active Record models","  # config.active_record.mass_assignment_sanitizer = :strict","","  # Log the query plan for queries taking more than this (works","  # with SQLite, MySQL, and PostgreSQL)","  config.active_record.auto_explain_threshold_in_seconds = 0.5","","  # Do not compress assets","  config.assets.compress = false","","  # Expands the lines which load the assets","  config.assets.debug = true","","end"],"id":17},{"start":{"row":1,"column":0},"end":{"row":72,"column":3},"action":"insert","lines":["# Settings specified here will take precedence over those in config/application.rb.","","  # In the development environment your application's code is reloaded on","  # every request. This slows down response time but is perfect for development","  # since you don't have to restart the web server when you make code changes.","  config.cache_classes = false","","  # Do not eager load code on boot.","  config.eager_load = false","","  # Show full error reports.","  config.consider_all_requests_local = true","","  # Enable/disable caching. By default caching is disabled.","  if Rails.root.join('tmp/caching-dev.txt').exist?","    config.action_controller.perform_caching = true","","    config.cache_store = :memory_store","    config.public_file_server.headers = {","      'Cache-Control' => 'public, max-age=172800'","    }","  else","    config.action_controller.perform_caching = false","","    config.cache_store = :null_store","  end","","  # Don't care if the mailer can't send.","  config.action_mailer.raise_delivery_errors = false","","  config.action_mailer.perform_caching = false","","  # Print deprecation notices to the Rails logger.","  config.active_support.deprecation = :log","","  # Raise an error on page load if there are pending migrations.","  config.active_record.migration_error = :page_load","","  # Debug mode disables concatenation and preprocessing of assets.","  # This option may cause significant delays in view rendering with a large","  # number of complex assets.","  config.assets.debug = true","","  config.action_mailer.smtp_settings = {","    address: \"smtp.sendgrid.net\",","    port: 587,","    domain: Rails.application.secrets.domain_name,","    authentication: \"plain\",","    enable_starttls_auto: true,","    user_name: Rails.application.secrets.email_provider_username,","    password: Rails.application.secrets.email_provider_password","  }","  # ActionMailer Config","  config.action_mailer.default_url_options = { :host => 'localhost:3000' }","  config.action_mailer.delivery_method = :smtp","  config.action_mailer.raise_delivery_errors = true","  # Send email in development mode?","  config.action_mailer.perform_deliveries = true","","  # Send email in development mode?","  config.action_mailer.perform_deliveries = true","","  # Suppress logger output for asset requests.","  config.assets.quiet = true","","  # Raises error for missing translations","  # config.action_view.raise_on_missing_translations = true","","  # Use an evented file watcher to asynchronously detect changes in source code,","  # routes, locales, etc. This feature depends on the listen gem.","  config.file_watcher = ActiveSupport::EventedFileUpdateChecker","end"]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"insert","lines":["  "],"id":18}],[{"start":{"row":1,"column":85},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":19}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":85},"end":{"row":1,"column":85},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1480685634807,"hash":"9e505d0a1a82050e83b1174ac6ac9be383d26794"}